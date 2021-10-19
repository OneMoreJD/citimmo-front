import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  private readonly MAX_API_CALL = 1;
  private apiActiveRequetCount:number = 0;
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // Address API call interception to avoid flooding the public API
    if(request.url.indexOf(environment.urls.addressSearchApi) !== -1 || request.url.indexOf(environment.urls.cityZipCodeSearchApi) !== -1){
        if(this.apiActiveRequetCount <= this.MAX_API_CALL){
          setTimeout(() => { 
            this.apiActiveRequetCount++;            
          }, 3000);
          return next.handle(request);
        } else {
          this.apiActiveRequetCount--;
        }
    } else {
      if (!request.headers.has('Content-Type')) {
        request = request.clone({
          headers: request.headers.set('Content-Type', 'application/json')
        });
      }
      request = this.addCorsHeaders(request);
      request = this.addToken(request);
      // console.log("Intercepted request == " + JSON.stringify(request));
      return next.handle(request);
    }    
  }

  private addCorsHeaders(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      headers: request.headers.set("Access-Control-Allow-Origin", "*")
    });
  }

  private addToken(request: HttpRequest<any>): HttpRequest<any> {
    if (sessionStorage.getItem('username') && sessionStorage.getItem('token')) {
      return request.clone({
        headers: request.headers.set("Authorization", sessionStorage.getItem('token'))
      });
    } else {
      return request;
    }
    
  }
}
