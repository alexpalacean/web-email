import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(route: string, params: any, options: any = {}): Observable<any> {
    return this.httpCall('GET', route, params, null, options);
  }

  post(route: string, params: any, payload: any): Observable<any> {
    return this.httpCall('POST', route, params, payload);
  }

  put(route: string, params: any, payload: any): Observable<any> {
    return this.httpCall('PUT', route, params, payload);
  }

  delete(route: string, params: any, options: any = {}): Observable<any> {
    return this.httpCall('DELETE', route, params, null, options);
  }

  private httpCall(method: string, route: string, params: any, payload: any, options: any = {}): Observable<any> {
    if (!payload) {
      payload = params;
    }
    const requestOptions = Object.assign({
      body: payload
    }, options);

    return new Observable((x: any) => {
          this.http.request(method, `api/${route}`, requestOptions)
            .subscribe((res: any) => {
              x.next(res);
              x.complete();
            }, (err: HttpErrorResponse) => {
              console.error(err);
              x.error(err);
              x.complete();
            });
    });
  }

}