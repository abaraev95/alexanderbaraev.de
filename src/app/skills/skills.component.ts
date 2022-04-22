import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {


  skills = [
    {
      'title':'HTML 5',
      'img': "assets/img/html5.png"
    },
    {
      'title':'CSS 3',
      'img': "assets/img/css3.png"
    },
    {
      'title':'JavaScript',
      'img': "assets/img/js.png"
    },{
      'title':'Angular',
      'img': "assets/img/angular.png"
    },{
      'title':'Bootstrap',
      'img': "assets/img/bootstrap.png"
    },
    {
      'title':'TypeScript',
      'img': "assets/img/typescript.png"
    },
    {
      'title':'GitHub',
      'img': "assets/img/git.png"
    },{
      'title':'Scrum',
      'img': "assets/img/scrum.png"
    },{
      'title':'REST API',
      'img': "assets/img/restapi.png"
    },
  ]

  constructor() {

   }

  ngOnInit(): void {
  }



  
}
