import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  public menus: Menu[];
  public types: Type[];

  ngOnInit() {
    this.initMenu();
    this.segregateMenuItems();
  }

  public initMenu(): void {
    this.menus = [
      {
        name: 'Dashboard',
        route: 'dashboard',
        type: 'primary'
      }, {
        name: 'Sprint Overview',
        route: 'sprint-overview',
        type: 'general'
      }, {
        name: 'Technology Stack',
        route: 'tech-stack',
        type: 'general'
      }, {
        name: 'Team Structure',
        route: 'team-structure',
        type: 'general'
      }, {
        name: 'GST Tools',
        route: 'gst-tools',
        type: 'general'
      }, {
        name: 'News',
        route: 'news',
      type: 'general'
      }, {
        name: 'Assessment',
        route: 'assessment',
        type: 'progress'
      }
    ];
  }

  public segregateMenuItems(): void {
    let typeNames: string[] = this.menus.map((menu: Menu) => menu.type);
    typeNames = typeNames.filter((a, b) => typeNames.indexOf(a) === b);
    this.types = typeNames.map((typeName: string) => {
      return {
        type: typeName,
        menuItems: this.menus.filter((menu: Menu) => menu.type === typeName)
      }
    });
  }

  public routeToPage(page: string, event: Event): void {
    this.router.navigate([page], {relativeTo: this.route});
  }

}

class Menu {
  name: string;
  route: string;
  type: string;
}

class Type {
  type: string;
  menuItems: Menu[];
}