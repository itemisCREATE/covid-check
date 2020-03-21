import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import 'firebase/firestore';
import { Patient } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private itemsCollection: AngularFirestoreCollection<Patient>;
  items: Observable<Patient[]>;

  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Patient>('patient');
    this.items = this.itemsCollection.valueChanges();
  }
  addItem(item: Patient) {
    this.itemsCollection.add(item);
  }
  update(item: Patient) {
    const itemDoc = this.afs.doc<Patient>('patient/' + item.id);
    itemDoc.update(item);
  }

  getAllPatients(){

  }
}
