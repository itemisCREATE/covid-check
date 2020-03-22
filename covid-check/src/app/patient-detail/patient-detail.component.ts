import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../model/model';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import * as firebase from 'firebase';
import { PatientStateService } from '../patient-state.service';
import { Router } from '@angular/router';
import { PatientService } from '../service/patient.service';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  patient: Patient;
  panelOpenState = false;

  constructor(private stateService: PatientStateService, private patientService: PatientService,  private router: Router) {
  }

  ngOnInit(): void {
    this.patient = this.stateService.patient;
  }

  back(){
    this.stateService.patient = null;
    this.router.navigate(['/patients']);
  }

  save(){
    this.patientService.update(this.patient)
  }

}

