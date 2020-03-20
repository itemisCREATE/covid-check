import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<CreateTestComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  ngOnInit(): void {
  }

  finish() {
    const patient = {}
    //TODO Add to firebase
    this.dialogRef.close();
  }

}
