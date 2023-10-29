import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class BackendService {
  private apiURL = "https://api.benpthom.com/analytics";

  constructor(private http: HttpClient) {

  }

  analyticsGetRequest() {
    if (!environment.production) {
      return;
    }

    return this.http.get<any[]>(this.apiURL).subscribe()
  }

  analyticsPostRequest(pComponent_name: string, pView_duration: number) {
    const dataToSend = {
      component_name: pComponent_name,
      view_duration: pView_duration
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    });

    if (!environment.production) {
      return;
    }

    this.http.post(this.apiURL, JSON.stringify(dataToSend), { headers }).subscribe()
  }

  handleError(res: any) {
    return throwError(() => new Error());
  }
}
