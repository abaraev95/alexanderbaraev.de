import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})


export class FrontpageComponent implements OnInit {

  text1: string = `I'm a`;
  text2: string = "fullstack";
  text3: string = "developer.";
  i = 0;
  x = 0;
  y = 0;

  timer: number = 80;


  constructor() { }


  ngOnInit() {
    setTimeout(() => {
      this.typeLetters();
    }, 1500);
  }

  typeLetters() {
    if (this.i < this.text1.length) {
      document.querySelector("#quotes")!.innerHTML += this.text1[this.i];
      this.i++;
      if (this.i == this.text1.length) {
        document.querySelector("#quotes")!.innerHTML += '&nbsp;';
      }
    } else if (this.x < this.text2.length) {
      document.querySelector("#quotes2")!.innerHTML += this.text2[this.x];
      this.x++;
      if (this.x == this.text2.length) {
        document.querySelector("#quotes2")!.innerHTML += '&nbsp;';
      }
    } else if (this.y < this.text3.length) {
      document.querySelector("#quotes3")!.innerHTML += this.text3[this.y];
      this.y++;
    }
    setTimeout(this.typeLetters.bind(this), this.timer);
  }




}
