import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  symptomdatepicker : string
  birthdatepicker : string

  constructor(
    private dialogRef: MatDialogRef<CreatePatientComponent>,
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
