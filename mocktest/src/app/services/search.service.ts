import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  apiUrl: string = 'https://dummyjson.com/users/';

  constructor(private http: HttpClient) {}
  search(query: string):Observable<any[]>{
    if (!query.trim()) {
      return of([]);
    }
console.log(this.apiUrl+ `search?q=${query}`);
    return this.http.get<any[]>(this.apiUrl+ `search?q=${query}`).pipe(catchError(error=>
    {
      console.log('Search User', error);
      return of([]);
    })
  );
  }
}
