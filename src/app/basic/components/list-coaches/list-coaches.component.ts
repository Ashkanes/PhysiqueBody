import { Coach } from './../_models/coach';
import { Component, OnInit } from '@angular/core';
import { CoachService } from '../_services/coach.service';
import { AlertifyService } from 'src/app/core/alertify.service';

@Component({
  selector: 'app-list-coaches',
  templateUrl: './list-coaches.component.html',
  styleUrls: ['./list-coaches.component.css']
})
export class ListCoachesComponent implements OnInit {
 coaches: Coach[];

  constructor(private coachService: CoachService, private alertify: AlertifyService) { }

  ngOnInit() {
  }


  LoadCoaches(){
    this.coachService.getCoaches().subscribe((coaches: Coach[]) => {
      this.coaches = coaches;
    }, error => {
      this.alertify.error(error);
    });
  }
}
