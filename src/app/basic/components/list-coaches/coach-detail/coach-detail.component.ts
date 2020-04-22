import { CoachService } from './../../_services/coach.service';
import { Component, OnInit } from '@angular/core';
import { Coach } from '../../_models/coach';
import { AlertifyService } from 'src/app/core/alertify.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-coach-detail',
  templateUrl: './coach-detail.component.html',
  styleUrls: ['./coach-detail.component.css']
})
export class CoachDetailComponent implements OnInit {

  coach:Coach;
  constructor(private coachService: CoachService, private alertify: AlertifyService) { }

  ngOnInit() {

  }


}
