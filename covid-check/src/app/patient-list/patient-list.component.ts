import { Component, OnInit, ViewChild } from '@angular/core';
import { Patient, Examination, ExaminationStatus } from '../model/model';
import { PatientService } from '../service/patient.service';
import { Observable } from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['fileNumber', 'firstname', 'lastname', 'dateOfBirth', 'street', 'zip', 'city', 'examinations'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private patientService: PatientService) {
  }

  ngOnInit(): void {
    this.patientService.items.subscribe({
      next: (patientList) => this.dataSource.data = patientList,
      error: (error) => console.log(error)
    });
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
