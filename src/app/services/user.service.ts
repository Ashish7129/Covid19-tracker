import { Injectable } from '@angular/core';
import { IAdmin } from '../model/data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { News } from '../news/news';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private adminUrl = 'api/admin';
  errorMessage: any;
  currentUser: boolean;
  constructor(private http: HttpClient) {}

  public getAdmins(): Observable<IAdmin[]> {
    return this.http.get<IAdmin[]>(this.adminUrl).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  async adminLogin(admin: IAdmin): Promise<boolean> {
    await this.getAdmins().subscribe({
      next: (currentUsers) => {
        const authUser = currentUsers.find(
          (x) => x.email === admin.email && x.password === admin.password
        );
        console.log('user : ' + authUser);
        this.currentUser = !authUser ? false : true;
      },
      error: (err) => (this.errorMessage = err),
    });
    return this.currentUser;
  }

  public handleError(
    handleError: any
  ): import('rxjs').OperatorFunction<IAdmin[], any> {
    throw new Error('Method not implemented.');
  }
}
