import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef, Input } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { StateService } from '../../property/state.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  @Output() uploadFinished = new EventEmitter<string>();
  isHovering: boolean;
  image: Observable<string>;

  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private state: StateService) { }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    const file = event.item(0);
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }
    const path = `properties/${new Date().getTime()}_${file.name}`;
    this.task = this.storage.upload(path, file);
    this.snapshot = this.task.snapshotChanges();

    this.task.snapshotChanges().pipe(
      finalize(() => { this.uploadFinished.emit(path); this.storage.ref(path).getDownloadURL().subscribe(image => this.image = image); })
    )
      .subscribe();
  }
}
