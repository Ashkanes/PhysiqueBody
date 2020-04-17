import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { BasicModule } from './basic/basic.module';
import { AuthService } from './_services/auth.service';




@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BasicModule,
    AppRoutingModule,
    DashboardModule,
    BrowserAnimationsModule,
   
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
