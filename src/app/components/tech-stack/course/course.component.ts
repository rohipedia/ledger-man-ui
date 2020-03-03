import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TechnologyService } from 'src/app/services/technology/technology.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private techService: TechnologyService) { }
  private id: number;
  private technology: any;

  ngOnInit() {
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.technology = this.techService.getTechnology(this.id);
      console.log(this.technology);
    });
  }

}
