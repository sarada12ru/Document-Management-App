import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private apiService: ApiService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.apiService.getToken();
    const clonedRequest = req.clone({
      setHeaders: token ? { Authorization: `Bearer ${token}` } : {},
    });

    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('API Error:', error);
        if (error.status === 401) {
          this.router.navigate(['/auth']);
        } else if (error.status === 403) {
          this.router.navigate(['/forbidden']);
        } else if (error.status >= 500) {
          this.router.navigate(['/server-error']);
        }
        return throwError(() => error);
      })
    );
  }
}
