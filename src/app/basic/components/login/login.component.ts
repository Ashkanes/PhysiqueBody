import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model:any={};
  constructor(private authService: AuthService) {

   }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next =>
    {
      console.log("success logon");
    }, error => {console.log("failed login");}
    );
  }

  loggedIn(){
    const token = localStorage.getItem("token");
    return !!token;
  }
  

}
