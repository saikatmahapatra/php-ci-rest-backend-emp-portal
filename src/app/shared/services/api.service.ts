import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private APIBaseURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getCMSContent() {
    return this.http.get(this.APIBaseURL + 'posts');
  }

  getUsers() {
    return this.http.get(this.APIBaseURL + 'users');
  }

  createUsers(data: any) {
    return this.http.post(this.APIBaseURL + 'users', data);
  }

  getUsersTest() {
    return this.http.get('http://localhost/angular-demo-app/server/api_server/rest/api/users').pipe(
      catchError((err) => {
        err.statusText = 'This is a custom error message from angular service';
        return throwError(err.message); //Rethrow it back to component
      })
    );
  }

}
