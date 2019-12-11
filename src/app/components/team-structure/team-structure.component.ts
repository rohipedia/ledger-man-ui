import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import teams from './team-structure.js';

@Component({
  selector: 'app-team-structure',
  templateUrl: './team-structure.component.html',
  styleUrls: ['./team-structure.component.scss']
})
export class TeamStructureComponent implements OnInit {

  constructor() { }

  data: TreeNode[];

  ngOnInit() {
    this.data = teams;
  }

  onNodeSelect(event) {
    console.log(event.node);
  }

}
