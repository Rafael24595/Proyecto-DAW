import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  intercept(req, next){
    const tokenizeReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${localStorage.getItem('sessionToken')}`
      }
    });
    return next.handle(tokenizeReq);
  }

  constructor() { }
}
