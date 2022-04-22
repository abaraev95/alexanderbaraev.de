import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  projects = [
    {
      'projectName': 'Join',
      'projectDescription': 'Project Management Kanban Board',
      'projectImage':'assets/img/join.PNG',
      'createdWith':'JavaScript'
    },
    {
      'projectName': 'El Pollo Loco',
      'projectDescription': 'A small game to demonstrate my knowlegde of OOP',
      'projectImage':'assets/img/el-pollo-loco.png',
      'createdWith':'JavaScript'
    },
    {
      'projectName': 'wasotech GmbH',
      'projectDescription': 'New Homepage for wasotech Gmbh',
      'projectImage':'assets/img/wasotech.png',
      'createdWith':'JavaScript'
    },
    {
      'projectName': 'Join',
      'projectDescription': 'Project Management Kanban Board',
      'projectImage':'assets/img/join.PNG',
      'createdWith':'JavaScript'
    },
    {
      'projectName': 'El Pollo Loco',
      'projectDescription': 'A small game to demonstrate my knowlegde of OOP',
      'projectImage':'assets/img/el-pollo-loco.png',
      'createdWith':'JavaScript'
    },
    {
      'projectName': 'wasotech GmbH',
      'projectDescription': 'New Homepage for wasotech Gmbh',
      'projectImage':'assets/img/wasotech.png',
      'createdWith':'JavaScript'
    }
  ]

  constructor() { }

  projectSelector = 1;
  filterChanged = false;

  projectSelected(index: number) {
    this.projectSelector = index;
    this.changeAnimation();
  }

  filterProjects(tool: any): any {
    if(this.projectSelector == 1) {
      return tool.createdWith != '';
    }
    if(this.projectSelector == 2) {
      return tool.createdWith == 'Angular';
    }
    if(this.projectSelector == 3) {
      return tool.createdWith == 'JavaScript';
    }
    if(this.projectSelector == 4) {
      return tool.createdWith == 'Python';
    } 
  }

  changeAnimation() {
    this.filterChanged = true;
    setTimeout(() => {
      this.filterChanged = false;
    }, 750);
  }
}
