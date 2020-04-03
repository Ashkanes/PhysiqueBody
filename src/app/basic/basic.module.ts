import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from './basic-routing.module';
import { MainAppComponent } from './main-app/main-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContectComponent } from './components/main-contect/main-contect.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [MainAppComponent, ToolbarComponent, MainContectComponent, SidenavComponent],
  imports: [
    CommonModule,
    BasicRoutingModule,
    SharedModule
  ]
})
export class BasicModule { }
