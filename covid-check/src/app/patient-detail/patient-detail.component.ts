import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../model/model';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
import * as firebase from 'firebase';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {

  patient: Patient ;
  panelOpenState = false;

  constructor() {
    this.patient = {id:'1'
    , filenumber:'2341234'
    , firstname:'Kuno'
    , lastname:'Klötzer'
    , dateofbirth:firebase.firestore.Timestamp.now()
    , street:"Am Waldweg"
    , zip: "12345"
    , city: "Hintertupfingen"}
   }

  ngOnInit(): void {
  }

}

