import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from '../core/_guards/auth.guard';
import { ListCoachesComponent } from './components/list-coaches/list-coaches.component';


const routes: Routes = [
  
  {path:"", component:MainAppComponent,children:[
  {path:"", component:MainContentComponent,children:[
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"coaches", component:ListCoachesComponent},
    /* {path:"home", component:RegisterComponent , canActivate:[AuthGuard]}, */
    /* {path:'',
  runGuardsAndResolvers: 'always',
canActivate: [AuthGuard],
children:[]}, */

  ]}
]},
{path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }
