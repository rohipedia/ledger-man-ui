import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/technology.model';
import stubTechnologies from './../../stubs/technology.stubs.js';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {

  public technologies: Technology[] = [];

  constructor() { }

  ngOnInit() {
    this.technologies = stubTechnologies;
  }

}
