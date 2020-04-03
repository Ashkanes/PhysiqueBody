import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"mainmanager", loadChildren:"./basic/basic.module#BasicModule"},
  {path:"", redirectTo:"mainmanager", pathMatch:"full"},
  {path:"**", redirectTo:"mainmanager"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
