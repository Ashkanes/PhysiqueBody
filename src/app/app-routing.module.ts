import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './basic/components/login/login.component';


const routes: Routes = [
  //{path:"login", component:LoginComponent},
  {path:"mainmanager", loadChildren:"./basic/basic.module#BasicModule"},
 // {path:"mainmanager", loadChildren:"./basic/basic.module#BasicModule"},
  {path:"", redirectTo:"mainmanager", pathMatch:"full"},
  {path:"**", redirectTo:"mainmanager"} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
