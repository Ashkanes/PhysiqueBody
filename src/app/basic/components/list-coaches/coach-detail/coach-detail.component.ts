import { CoachService } from './../../_services/coach.service';
import { Component, OnInit } from '@angular/core';
import { Coach } from '../../_models/coach';
import { AlertifyService } from 'src/app/core/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {

  coach:Coach;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private coachService: CoachService, private alertify: AlertifyService) { }

  ngOnInit() {
        this.galleryOptions = [
            {
                width: '600px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];
 
        this.galleryImages = [
            {
                small: 'assets/marc.jpg',
                medium: 'assets/marc.jpg',
                big: 'assets/marc.jpg'
            },
            {
              small: 'assets/marc.jpg',
              medium: 'assets/marc.jpg',
              big: 'assets/marc.jpg'
          },
          {
            small: 'assets/marc.jpg',
            medium: 'assets/marc.jpg',
            big: 'assets/marc.jpg'
        }
        ];

  }

  getImages(){
      const imgUrls = [];
      for(let i=0; i < this.coach.photo.length; i++){
        imgUrls.push({
            small: this.coach.photo[i].url,
            medium: this.coach.photo[i].url,
            big: this.coach.photo[i].url,
            description:this.coach.photo[i].description
        });
      }
      return imgUrls;
  }

}
