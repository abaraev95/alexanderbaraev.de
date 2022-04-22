import { Component, ElementRef, HostListener, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() highlightedSection: number | undefined;

  opened = false;
  
  
    constructor() { }

    ngOnInit() {
    }

    openMenu() {
      if (!this.opened) {
        this.opened = true;
        this.stopScrolling();
      } else {
        this.closeMenu();
      }
    }

    closeMenu() {
      if(this.opened) {
        this.opened = false;
        this.allowScrolling();
      }
    }

    stopScrolling() {
      document.body.classList.add('stop-scrolling');
      // document.documentElement.classList.add('stop-scrolling');
    }

    allowScrolling() {
      document.body.classList.remove('stop-scrolling');
      // document.documentElement.classList.remove('stop-scrolling');
    }

  }
