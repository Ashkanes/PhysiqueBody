import { City } from './../_models/city';
import { RegionService } from './../_services/region.service';
import { Region } from './../_models/region';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { AlertifyService } from 'src/app/core/alertify.service';
import { FileUploader } from 'ng2-file-upload';
import { Photo } from '../_models/photo';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-club',
  templateUrl: './register-club.component.html',
  styleUrls: ['./register-club.component.css']
})
export class RegisterClubComponent implements OnInit {

  model:any = {};
  regions: Region[];
  cities: City[]=[];

  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = environment.apiUrl;
  currentMain: Photo;

  constructor(private authService:AuthService, private regionService:RegionService , private alertify:AlertifyService) { }

  ngOnInit() {
    this.regionService.getRegion().subscribe(
      data => {
        this.regions = data
        console.log("get error: ", this.regions);
      }
    )
    this.initializeUploader();
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  register(){
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success("ثبت نام با موفقیت انجام شد");
    }, error => {
      this.alertify.error(error);
    })
  }

  
  initializeUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'users/' + this.authService.decodeToken.nameid + '/photos',
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5: true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
  }

  fetchCity(id: number){
    if (id === undefined || id.toString() === "undefined") {
      return;
    }
      this.regionService.getCity(id).subscribe(
        data => this.cities = data
      )
    
  }
}
