import { Component, OnInit, ViewChild } from '@angular/core';
import {Patient} from '../model/model';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  dataSource = new MatTableDataSource(PATIENT_MOCK);
  displayedColumns: string[] = ['fileNumber','firstname','lastname','dateOfBirth'];
  @ViewChild(MatSort, {static: true}) sort: MatSort; 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 
  
  constructor() { }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}

const PATIENT_MOCK: Patient [] = [
  { fileNumber: "123", firstname: "Manfred", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen" },
  { fileNumber: "123", firstname: "Manfred2", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Manfred3", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Manfred4", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Manfred5", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Manfred6", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Manfred7", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Manfred8", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Manfred9", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Manfred10", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Manfred11", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Manfred12", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Manfred13", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Manfred14", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Manfred15", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
];