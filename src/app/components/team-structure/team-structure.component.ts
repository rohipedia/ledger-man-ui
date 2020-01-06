import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-team-structure',
  templateUrl: './team-structure.component.html',
  styleUrls: ['./team-structure.component.scss']
})
export class TeamStructureComponent implements OnInit {
  
  public data: TreeNode[];

  constructor(private activatedRoute: ActivatedRoute) {
  }
  
  ngOnInit() {
    this.activatedRoute.data.subscribe((data: Data) => {
      this.data = data['teams'];
    });
  }

  onNodeSelect(event) {
    console.log(event.node);
  }

}
