import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTestComponent } from '../dialogs/create-test/create-test.component';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from '../service/patient.service';
import { Examination, Patient, ExaminationStatus } from '../model/model';
import { PatientStateService } from '../patient-state.service';

@Component({
  selector: 'app-examination-list',
  templateUrl: './examination-list.component.html',
  styleUrls: ['./examination-list.component.css']
})
export class ExaminationListComponent implements OnInit {

  dataSource = new MatTableDataSource();
  patient: Patient;
  examinations: Examination[];

  displayedColumns: string[] = ['fileNumber', 'date', 'status'];

  constructor(
    private dialog: MatDialog,
    private patientService: PatientService,
    private patientStateService: PatientStateService) { }

  ngOnInit(): void {
    this.examinations = this.patientStateService.patient.examinations;
    this.dataSource.data = this.examinations;
  }

  dateNullSafe(p: Examination) {
    if (p.date != null) {
      return p.date.toDate();
    } else {
      return null;
    }
  }

  stateNullSafe(p: Examination) {
    if (p.status !== undefined) {
      return p.status.toLocaleString();
    } else {
      return 'unknown';
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  createTest() {
    const dialogRef = this.dialog.open(CreateTestComponent, {
      data: 'data'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('result');
      }
    });
  }

  select(examination: Examination) {

  }
}
