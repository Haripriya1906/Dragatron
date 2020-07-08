import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';


const routes: Routes = [
  {path:'', component:AddemployeeComponent},
  { path:"Items", component:EmployeeListComponent },
  // { path:"AddEmployee", component:AddemployeeComponent },
   
  { path:"**", redirectTo:'Items' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
