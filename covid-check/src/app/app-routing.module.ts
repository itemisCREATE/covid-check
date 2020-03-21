import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTestComponent } from './dialogs/create-test/create-test.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { StatusCheckComponent } from './status-check/status-check.component';


const routes: Routes = [
  { path: '', redirectTo: '/patients', pathMatch: 'full' },
  { path: 'patients', component: PatientListComponent},
  { path: 'status', component: StatusCheckComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
