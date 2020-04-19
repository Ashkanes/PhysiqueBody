import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  menuIcon:boolean=false;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  toggle(){
    this.toggleSidenav.emit();
    this.menuIcon = !this.menuIcon;
  }

  loggedIn(){
    return this.authService.LoggedIn();
  }

}
