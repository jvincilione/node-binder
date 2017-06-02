import { Injectable } from '@angular/core';

const PAGES = [{
  id: 1,
  slug: 'home',
  content: 'The quick brown fox jumps over the lazy dog.',
  title: 'Landmark Baptist Church'
},
{
  id: 2,
  slug: 'about',
  content: '<div class="well">Landmark Baptist Church was founded in 1990. <\div>',
  title: 'Learn about us!'
},
{
  id: 3,
  slug: 'beliefs',
  content: '<div class="well">Jesus saves! <\div>',
  title: 'What we believe!'
}];

@Injectable()

export class PageService {

  getPageContent(slug): Promise<any> {
    return Promise.resolve(PAGES.find(pg => pg.slug === slug));
  }
}
