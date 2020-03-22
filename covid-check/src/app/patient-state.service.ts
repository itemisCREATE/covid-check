import { Injectable } from '@angular/core';
import { Patient } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class PatientStateService {

  public patient : Patient;
 
  constructor() { }
}
