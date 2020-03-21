import { Component, OnInit, Inject, Input, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location, Appearance } from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import { PatientService } from '../service/patient.service';
import { Patient, Gender } from '../model/model';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  symptomdatepicker: string;
  birthdatepicker: string;

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

  finish() {
    const patient: Patient = {
      firstname: this.firstname.nativeElement.value, lastname: this.lastname.nativeElement.value,
      city: 'Lünen', dateOfBirth: new Date(), fileNumber: '1', street: 'Test Str. 1', zip: '', id: '', gender: Gender.d
    };
    this.patientService.addItem(patient);
    //TODO Add to firebase
    this.dialogRef.close();
  }

  onAutocompleteSelected(result: PlaceResult) {
    this.placeResult = result;

  }
  onLocationSelected(location: Location) {
    this.latitude = location.latitude;
    this.longitude = location.longitude;
    this.zoom = 15;
  }


}
