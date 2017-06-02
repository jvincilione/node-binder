import { Injectable } from '@angular/core';

@Injectable()
export class NavService {
  getMenuItems(): Promise<any>  {
    return Promise.resolve([
        {
          title: 'Home',
          href: '/home/',
          classes: 'home-icon',
          id: 1,
          parentId: undefined
        },
        {
          title: 'About',
          href: '',
          classes: '',
          id: 2,
          parentId: undefined
        },
        {
          title: 'Beliefs',
          href: '/about/beliefs',
          classes: '',
          id: 3,
          parentId: 2
        }
      ]);
  }
}
