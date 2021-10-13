import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
      });
    }
    request = this.addCorsHeaders(request);
    request = this.addToken(request);
    console.log("Intercepted request == " + JSON.stringify(request));
    return next.handle(request);
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
