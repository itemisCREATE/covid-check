import { Component, OnInit } from '@angular/core';
import { Patient } from '../model/model';
import { PatientService } from '../service/patient.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  dataSource = [];
  displayedColumns: string[] = ['fileNumber', 'firstname', 'lastname', 'dateOfBirth'];
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.items.subscribe({
      next: (patientList) => this.dataSource = patientList,
      error: (error) => console.log(error)
    });
  }
}
