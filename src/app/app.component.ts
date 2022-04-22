import { Component, HostListener, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  activeMenu: number = 1;
  elements = document.getElementsByClassName('scrollHeight');

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.checkScrollingPosition();
  }
  constructor() { }

  ngOnInit() {
    AOS.init();
  }

  checkScrollingPosition() {
    if (this.elements[0]?.getBoundingClientRect().top < 100) { this.activeMenu = 1; }
    if (this.elements[1]?.getBoundingClientRect().top < 100) { this.activeMenu = 2; }
    if (this.elements[2]?.getBoundingClientRect().top < 100) { this.activeMenu = 3; }
    if (this.elements[3]?.getBoundingClientRect().top < 100) { this.activeMenu = 4; }
    if (this.elements[4]?.getBoundingClientRect().top < 100) { this.activeMenu = 5; }
  }

}
