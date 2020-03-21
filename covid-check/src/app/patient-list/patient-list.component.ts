import { Component, OnInit } from '@angular/core';
import {Patient} from '../model/model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  PATIENT_MOCK: Patient [] = [
    { fileNumber: "123", firstname: "Manfred", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen" },
    { fileNumber: "123", firstname: "Manfred2", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
    { fileNumber: "123", firstname: "Manfred3", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
    { fileNumber: "123", firstname: "Manfred4", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
    { fileNumber: "123", firstname: "Manfred5", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
    { fileNumber: "123", firstname: "Manfred6", lastname: "Mustermann", dateOfBirth: new Date("1984-03-12"), street: "Teststr. 5", zip: "45144", city: "Lünen"},
  ];
  
  dataSource = this.PATIENT_MOCK;
  displayedColumns: string[] = ['fileNumber','firstname','lastname','dateOfBirth'];
  constructor() { }

  ngOnInit(): void {
  }

}
