import { Component, OnInit, Inject, Input, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location, Appearance } from '@angular-material-extensions/google-maps-autocomplete';
import { PatientService } from '../service/patient.service';
import { Patient, Gender } from '../model/model';
import PlaceResult = google.maps.places.PlaceResult;
import { MatDatepicker } from '@angular/material/datepicker';
import { concat } from 'rxjs';
import { concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  symptomdatepicker: string;
  birthdatepicker : MatDatepicker<Date>

  @ViewChild('firstname')
  firstname: ElementRef;

  @ViewChild('lastname')
  lastname: ElementRef;

  latitude = 52.520008;
  longitude = 13.404954;
  zoom = 5;
  placeResult: PlaceResult;


  constructor(
    private dialogRef: MatDialogRef<CreatePatientComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string,
    private patientService: PatientService,
  ) { }

  ngOnInit(): void {
  }

  finish(event : any) {
    const patient: Patient = {
      firstname: this.firstname.nativeElement.value, 
      lastname: this.lastname.nativeElement.value,
      city: this.placeResult.address_components[4].long_name,
      fileNumber: '1', 
      street: this.placeResult.address_components[1].long_name + this.placeResult.address_components[0].long_name, 
      zip: this.placeResult.address_components[6].long_name, 
      id: '', 
      gender: Gender.d
    } as undefined as Patient;
    this.patientService.addItem(patient);
    this.dialogRef.close();
  }

  onAutocompleteSelected(result: PlaceResult) {
    this.placeResult = result;
    console.log(this.placeResult.address_components)
  }
  onLocationSelected(location: Location) {
    this.latitude = location.latitude;
    this.longitude = location.longitude;
    this.zoom = 15;
  }


}
