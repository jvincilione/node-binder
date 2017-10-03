import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Page } from '../page';
import { PageService } from './page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  providers: [ PageService ]
})

export class PageComponent implements OnInit {
  page: Page;

  constructor(private _pageService: PageService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getPageContent();
  }

  getPageContent(): void {
    this._route.params.subscribe(params => {
      this._pageService.getPageContent(params['slug'])
        .then((page) => {
          this.page = new Page(page.json());
        });
    });
  }

}
