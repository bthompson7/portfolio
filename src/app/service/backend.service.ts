import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  private url = "https://api.benpthom.com/analytics";

  constructor(private http: HttpClient) {

  }

  logRequest() {
    return this.http
      .get<any[]>(this.url)
      .pipe(map(data => data), catchError(this.handleError));
  }

  handleError(res: any) {
    return throwError(() => new Error('Error fetching data'));
  }
}
