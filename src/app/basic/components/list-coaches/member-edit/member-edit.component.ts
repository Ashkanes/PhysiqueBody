import { Component, OnInit } from '@angular/core';
import { Coach } from '../../_models/coach';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {

  coach:Coach;

  constructor() { }

  ngOnInit() {
  }

}
