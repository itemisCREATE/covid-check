import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';
import { PatientStateService } from 'src/app/patient-state.service';
import { PatientService } from 'src/app/service/patient.service';
import { Patient, Examination, ExaminationStatus } from 'src/app/model/model';
import { ExaminationListComponent } from 'src/app/examination-list/examination-list.component';
import { database } from 'firebase/app';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  symptomdatepicker: MatDatepicker<Date>
  patient: Patient;

  constructor(
    private dialogRef: MatDialogRef<CreateTestComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string,
    private patientService: PatientService,
    private stateService: PatientStateService
  ) { }

  ngOnInit(): void {
    this.patient = this.stateService.patient;
  }

  finish() {
    const examination: Examination = {
      date: database.ServerValue.TIMESTAMP.constructor(new Date()),
      filenumber: uuid(),
      status: ExaminationStatus.scheduled,
    };
    if(this.patient.examinations === undefined) {
      this.patient.examinations = [];
    }
    this.patient.examinations.push(examination);
    this.patientService.update(this.patient);
    this.dialogRef.close();
  }

}
