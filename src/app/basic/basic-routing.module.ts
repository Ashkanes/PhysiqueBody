import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAppComponent } from './main-app/main-app.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from '../core/_guards/auth.guard';
import { ListCoachesComponent } from './components/list-coaches/list-coaches.component';
import { CoachDetailComponent } from './components/list-coaches/coach-detail/coach-detail.component';
import { MemberEditComponent } from './components/list-coaches/member-edit/member-edit.component';
import { RegisterClubComponent } from './components/register-club/register-club.component';


const routes: Routes = [
  
  {path:"", component:MainAppComponent,children:[
  {path:"", component:MainContentComponent,children:[
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent},
    {path:"registerClub", component:RegisterClubComponent},
    {path:"coaches", component:ListCoachesComponent},
    {path:"coaches/detail", component:CoachDetailComponent},
    {path:"coaches/detail/edit", component:MemberEditComponent},
  ]}
]},
{path:"**", redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasicRoutingModule { }


    /* {path:"home", component:RegisterComponent , canActivate:[AuthGuard]}, */
    /* {path:'',
  runGuardsAndResolvers: 'always',
canActivate: [AuthGuard],
children:[]}, */
