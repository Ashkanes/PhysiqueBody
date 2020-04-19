import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { BasicModule } from './basic/basic.module';
import { AuthService } from './_services/auth.service';
import { ErrorInterceptorProvide } from './core/error.interceptor';
import { AlertifyService } from './core/alertify.service';




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
  providers: [AuthService,ErrorInterceptorProvide,AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
