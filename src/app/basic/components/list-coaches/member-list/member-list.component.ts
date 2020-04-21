import { Component, OnInit, Input } from '@angular/core';
import { Coach } from '../../_models/coach';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {

  @Input() coach: Coach;
  constructor() { }

  ngOnInit() {
  }

}
