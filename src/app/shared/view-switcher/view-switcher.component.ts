import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-switcher',
  templateUrl: './view-switcher.component.html',
  styleUrls: ['./view-switcher.component.scss']
})
export class ViewSwitcherComponent implements OnInit {
  viewState = false;

  constructor() { }

  ngOnInit() {
  }
  swithView() {
    this.viewState = !this.viewState;
  }

}
