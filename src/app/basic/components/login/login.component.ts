import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/core/alertify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any={};
  constructor(private authService: AuthService, private alertify: AlertifyService) {}

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next =>
    {
      this.alertify.success("success logon");
    }, error => { this.alertify.error("failed login");}
    );
  }

  loggedIn(){
  return this.authService.LoggedIn();
  }

  logOut(){
    localStorage.removeItem("token");
    this.alertify.message("logged out");
  }
  

}
