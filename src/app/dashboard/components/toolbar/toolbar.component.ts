import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
@Output() toggleSidenav = new EventEmitter<void>();

menuIcon:boolean=false;
  constructor() { }

  ngOnInit() {

  }

  toggle(){
    this.toggleSidenav.emit();
    this.menuIcon = !this.menuIcon;
  }

}
