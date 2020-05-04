import { AuthService } from './../../../_services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/core/alertify.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Roles: any = ['Admin', 'Author', 'Reader'];
  model:any = {};

  constructor(private authService:AuthService, private alertify:AlertifyService) { }

  ngOnInit() {
  }

  register(){
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success("ثبت نام با موفقیت انجام شد");
    }, error => {
      this.alertify.error(error);
    })
  }

}
