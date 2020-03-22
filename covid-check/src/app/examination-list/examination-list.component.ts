import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTestComponent } from '../dialogs/create-test/create-test.component';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from '../service/patient.service';
import { Examination, Patient, ExaminationStatus } from '../model/model';
import { PatientStateService } from '../patient-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-examination-list',
  templateUrl: './examination-list.component.html',
  styleUrls: ['./examination-list.component.css']
})
export class ExaminationListComponent implements OnInit, OnDestroy {

  dataSource = new MatTableDataSource();
  examinations: Examination[];
  patientSubscription: Subscription;
  displayedColumns: string[] = ['fileNumber', 'date', 'status'];

  constructor(
    private dialog: MatDialog,
    private patientService: PatientService,
    private patientStateService: PatientStateService) { }

  ngOnInit(): void {
    const patient = this.patientStateService.patient;
    this.patientSubscription = this.patientService.patientObservable(patient).subscribe((p: Patient) => {
      this.examinations = p.examinations;
      this.dataSource.data = this.examinations;
    });
    this.examinations = patient.examinations;
    this.dataSource.data = this.examinations;
  }

  ngOnDestroy(){
    if (this.patientSubscription !== undefined) {
      this.patientSubscription.unsubscribe();
      this.patientSubscription = undefined;
    }
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
      return ExaminationStatus[p.status].toLocaleString();
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
        this.examinations = this.patientStateService.patient.examinations;
        this.dataSource.data = this.examinations;
      }
    });
  }

  select(examination: Examination) {

  }
}
