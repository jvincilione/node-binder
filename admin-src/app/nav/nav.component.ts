import { Component, OnInit } from '@angular/core';

import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [ NavService ]
})
export class NavComponent implements OnInit {
  menuItems: Array<any>;
  activeSubnavId: Number;

  constructor(private _navService: NavService) { }

  ngOnInit() {
    this.getMenu();
  }

  getMenu(): void{
    this._navService.getMenuItems()
      .then((navItems) => {
        this.setupNav(navItems);
      });
  }

  setupNav(items): void{
    let menu = [];
    let notYetAdded = [];
    for (let item of items) {
      if (item.parentId) {
        let parent = menu.find(mItem => mItem.id === item.parentId);
        if (parent) {
          parent.childPages.push(item);
        }
      } else {
        item.childPages = [];
        menu.push(item);
      }
    }
    this.menuItems = menu;
  }

  toggleSubnav(id) :void{
    if (this.activeSubnavId === id) {
      this.activeSubnavId = undefined;
    } else {
      this.activeSubnavId = id;
    }
  }

}
