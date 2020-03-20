import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTestComponent } from './dialogs/create-test/create-test.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
