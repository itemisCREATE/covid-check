import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Location, Appearance } from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  birthdatepicker : MatDatepicker<Date>

  latitude = 52.520008;
  longitude = 13.404954;
  zoom = 5;
  placeResult: PlaceResult;


  constructor(
    private dialogRef: MatDialogRef<CreatePatientComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  ngOnInit(): void {
  }

  finish() {
    const patient = {}
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
