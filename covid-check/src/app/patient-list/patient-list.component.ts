import { Component, OnInit, ViewChild } from '@angular/core';
import {Patient, Examination, ExaminationStatus } from '../model/model';
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
  displayedColumns: string[] = ['fileNumber','firstname','lastname','dateOfBirth', 'street', 'zip', 'city','examinations'];
  @ViewChild(MatSort, {static: true}) sort: MatSort; 
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  
 
  
  
  constructor() {
    this.prepareData()

  }
  
  prepareData(){
    PATIENT_MOCK.forEach(function (e) {
      e.examinations = []
    });
    
    EXAMINATION_MOCK.forEach(function (e) {
      e.patient.examinations.push(e)
    }); 
  } 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

} 

var PATIENT_MOCK: Patient [] = [
  { fileNumber: "123", firstname: "Manfred", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen" },
  { fileNumber: "123", firstname: "Hans", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Günther", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Petra", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Karin", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Kerstin", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Kamilla", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Horst", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Emil", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Kurt", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Anna", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Oma", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Opa", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Yves", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  { fileNumber: "123", firstname: "Ulf", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
];

var EXAMINATION_MOCK: Examination[]=[
  { id:"1", date: new Date("2020-03-21"), patient:PATIENT_MOCK[0], status:ExaminationStatus.scheduled, currentSymptoms:"Fieber", visitedSuspectRegions:"Spanien"}
]

