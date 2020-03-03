import { Injectable } from '@angular/core';
import stubTechnologies from './../../stubs/technology.stubs.js';
import { Technology } from 'src/app/models/technology.model.js';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  private technologies: Technology[];

  constructor() {
    this.technologies = stubTechnologies;
  }

  public getTechnologies(): Technology[] {
    return this.technologies;
  }

  public getTechnology(id: number): Technology {
    const technology = this.technologies.find((tech: Technology) => tech.id === id);
    return {...technology};
  }
}
