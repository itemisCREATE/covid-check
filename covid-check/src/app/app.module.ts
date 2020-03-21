import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatRadioModule } from "@angular/material/radio";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import { CreateTestComponent } from './dialogs/create-test/create-test.component';
import { QRCodeModule } from 'angular2-qrcode';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MatNativeDateModule } from '@angular/material/core';
import { AgmCoreModule } from '@agm/core';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { PatientListComponent } from './patient-list/patient-list.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './home/footer/footer.component';
import { PortfolioComponent } from './home/portfolio/portfolio.component';
import { DatePipe } from '@angular/common'
import { HumanReadableExaminationListPipe } from './pipes/human-readable-examination-list.pipe';
import { CommonModule } from "@angular/common";
import { FileUploadComponent } from './shared/file-upload/file-upload.component';
import { StatusCheckComponent } from './status-check/status-check.component';
import 'firebase/storage';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    NavBarComponent,
    CreateTestComponent,
    CreatePatientComponent,
    PatientListComponent,
    HomeComponent,
    FooterComponent,
    PortfolioComponent,
    HumanReadableExaminationListPipe,
    FileUploadComponent,
    StatusCheckComponent,
    PatientDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatMenuModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatNativeDateModule,
    MatStepperModule,
    MatCardModule, 
    QRCodeModule,
    CommonModule,
    FlexLayoutModule,
    MatGoogleMapsAutocompleteModule,
    AgmCoreModule.forRoot({
      apiKey: environment.firebase.mapsApiKey,
      libraries: ['places']
    }),
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    {

      provide: MatDialogRef,
      useValue: {}
    },
    MatDatepickerModule,
    DatePipe,
    HumanReadableExaminationListPipe
    
    
  ],
  bootstrap: [AppComponent],
  entryComponents : [
    CreateTestComponent,
    CreatePatientComponent
  ]
})
export class AppModule { }

