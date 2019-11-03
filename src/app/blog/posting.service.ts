import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Posting } from './_domain/posting';

@Injectable()
export class PostingService {
  constructor(private httpClient: HttpClient) { }

  getCurrentPostings(): Observable<Posting[]> {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/comments').pipe(
      map((response: any) => {
        return response.map(parsePosting);
      }),
    );
  }
}

function parsePosting(comment: any): Posting {
  const { id, name, body } = comment;
  return {
    id,
    name,
    body,
  };
}
