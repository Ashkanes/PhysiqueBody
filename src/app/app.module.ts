import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { BasicModule } from './basic/basic.module';
import { AuthService } from './_services/auth.service';
import { ErrorInterceptorProvide } from './core/error.interceptor';
import { AlertifyService } from './core/alertify.service';
import { AuthGuard } from './core/_guards/auth.guard';
import { CoachService } from './basic/components/_services/coach.service';
import 'hammerjs';


export function tokenGetter(){
  return localStorage.getItem('token');
}





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
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
        whitelistedDomains:['localhost:5000/'],
        blacklistedRoutes:['localhost:5000/api/auth']
      }
    })
    
  ],
  providers: [AuthService,
    ErrorInterceptorProvide,
    AlertifyService,
    AuthGuard,
    CoachService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
