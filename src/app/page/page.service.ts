import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const API_URL = '/api/v1/';

@Injectable()

export class PageService {

  constructor(private _http: Http) {
  }

  getPageContent(slug): Promise<any> {
    return this._http.get(API_URL + 'pages/' + slug)
                     .toPromise();
  }
}
