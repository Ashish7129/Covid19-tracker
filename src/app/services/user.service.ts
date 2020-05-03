import { Injectable } from '@angular/core';
import { IAdmin } from '../model/data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { News } from '../model/news';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public adminUrl = 'api/admin';
  errorMessage: any;
  currentUser: boolean;
  constructor(private http: HttpClient) {}

  public getAdmins(): Observable<IAdmin[]> {
    return this.http.get<IAdmin[]>(this.adminUrl).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  public handleError(
    handleError: any
  ): import('rxjs').OperatorFunction<IAdmin[], any> {
    throw new Error('Method not implemented.');
  }
}
