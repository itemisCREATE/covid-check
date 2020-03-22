import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTestComponent } from '../dialogs/create-test/create-test.component';
import { MatTableDataSource } from '@angular/material/table';
import { PatientService } from '../service/patient.service';
import { Examination, Patient, ExaminationStatus, ProbeResult } from '../model/model';
import { PatientStateService } from '../patient-state.service';
import { Subscription } from 'rxjs';
import { database } from 'firebase/app';

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
  patient: Patient;

  constructor(
    private dialog: MatDialog,
    private patientService: PatientService,
    private patientStateService: PatientStateService) { }

  ngOnInit(): void {
    this.patient = this.patientStateService.patient;
    this.patientSubscription = this.patientService.patientObservable(this.patient).subscribe((p: Patient) => {
      this.examinations = p.examinations;
      this.dataSource.data = this.examinations;
    });
    this.examinations = this.patient.examinations;
    this.dataSource.data = this.examinations;
  }

  ngOnDestroy() {
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
        this.examinations = this.patientStateService.patient.examinations;
        this.dataSource.data = this.examinations;
      }
    });
  }

  select(examination: Examination) {

  }

  test(event: Examination) {
    const examination = this.patient.examinations.find(e => e.filenumber == event.filenumber);
    examination.status = ExaminationStatus.probeOutstanding;
    if (examination.probes === undefined) {
      examination.probes = [];
    }
    examination.probes.push({
      creationDate: database.ServerValue.TIMESTAMP.constructor(new Date()),
    });
    this.patientService.update(this.patient);
  }

  positive(event: Examination) {
    const examination = this.patient.examinations.find(e => e.filenumber === event.filenumber);
    examination.status = ExaminationStatus.closed;
    const openProbe = examination.probes.find(p => p.result === undefined);
    if (openProbe !== undefined) {
      openProbe.result = ProbeResult.pos;
    }
    this.patientService.update(this.patient);
  }

  negative(event: Examination) {
    const examination = this.patient.examinations.find(e => e.filenumber === event.filenumber);
    examination.status = ExaminationStatus.closed;
    const openProbe = examination.probes.find(p => p.result === undefined);
    if (openProbe !== undefined) {
      openProbe.result = ProbeResult.neg;
    }
    this.patientService.update(this.patient);
  }

  unknown(event: Examination) {
    const examination = this.patient.examinations.find(e => e.filenumber === event.filenumber);
    examination.status = ExaminationStatus.closed;
    const openProbe = examination.probes.find(p => p.result === undefined);
    if (openProbe !== undefined) {
      openProbe.result = ProbeResult.unknown;
    }
    this.patientService.update(this.patient);
  }
}
