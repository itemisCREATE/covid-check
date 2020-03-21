import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTestComponent } from './dialogs/create-test/create-test.component';
import { PatientListComponent } from './patient-list/patient-list.component';


const routes: Routes = [
  { path: 'patients', component: PatientListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
