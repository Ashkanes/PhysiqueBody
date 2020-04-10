import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  
  {path:"", component:MainAppComponent,children:[
  {path:"", component:MainContentComponent,children:[
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},
  ]}
]},
{path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
