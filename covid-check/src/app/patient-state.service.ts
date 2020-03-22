import { Injectable, EventEmitter } from '@angular/core';
import { Patient } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class PatientStateService {

  private _patient: Patient;

  constructor() { }


  public set patient(v: Patient) {
    this._patient = v;
  }

  public get patient(): Patient {
    return this._patient;
  }

}
