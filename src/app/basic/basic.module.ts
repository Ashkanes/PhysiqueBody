import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { MainAppComponent } from './main-app/main-app.component';
import { RegisterComponent } from './components/register/register.component';
import { ListCoachesComponent } from './components/list-coaches/list-coaches.component';
import { MemberListComponent } from './components/list-coaches/member-list/member-list.component';
import { CoachDetailComponent } from './components/list-coaches/coach-detail/coach-detail.component';
import { MemberEditComponent } from './components/list-coaches/member-edit/member-edit.component';



@NgModule({
  declarations: [ToolbarComponent,
     MainContentComponent,
      SidenavComponent,
      LoginComponent,
       MainAppComponent, 
       RegisterComponent,
        ListCoachesComponent,
        MemberListComponent,
        CoachDetailComponent,
        MemberEditComponent],
  imports: [
    CommonModule,
    BasicRoutingModule,
    SharedModule
  ]
})
export class BasicModule { }
