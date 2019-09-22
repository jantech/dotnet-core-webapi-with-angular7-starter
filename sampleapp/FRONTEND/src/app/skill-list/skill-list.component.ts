import { Component, OnInit, Input } from '@angular/core';
import { Skill } from '../core/models/users';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {

  constructor() { }

  @Input() skillList: Skill[];

  ngOnInit() {

    // console.log('Skill List');

  }

}
