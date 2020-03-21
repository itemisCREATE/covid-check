import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../model/model';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  patient: Patient;

  constructor() { }

  ngOnInit(): void {
  }

}
