import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  isScreenSmall = false;
  watcher: Subscription;
  constructor(private media: MediaObserver) {
    this.watcher = this.media.media$.subscribe((change:MediaChange) => {
      this.isScreenSmall = change.mqAlias === "xs";
    });
   }

  ngOnInit() {
  }

}
