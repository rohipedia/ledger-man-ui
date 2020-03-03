import { Component, OnInit } from '@angular/core';
import { Technology } from 'src/app/models/technology.model';
import { Router, ActivatedRoute, NavigationEnd, Params } from '@angular/router';
import { TechnologyService } from 'src/app/services/technology/technology.service';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent implements OnInit {

  public technologies: Technology[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private techService: TechnologyService) {
  }

  ngOnInit() {
    this.technologies = this.techService.getTechnologies();
  }

  private startCourse(id: number): void {
    const course = {...this.technologies.find(tech => tech.id === id)};
    this.router.navigate([id], { relativeTo: this.route, state: course })
  }

}
