import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { Restlist } from '../Interfaces/restlist.model';


@Injectable()
export class RestService {

  apiUrl = 'https://hn.algolia.com/api/v1/search_by_date';

  constructor(private http: HttpClient) { }

  // get the data using with model.
  getAllData(): Observable<Restlist> {
    const httpParams = new HttpParams();
    // set parameter in URL.
    const params = httpParams.set('tags', 'story');
    return this.http.get<Restlist>(this.apiUrl, { params });
  }

}





