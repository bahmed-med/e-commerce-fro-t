import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpClientModule , HttpHeaders } from '@angular/common/http'
import { Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { 
    
  }

  private urlAuthentification = 'http://127.0.0.1:8000/api/login_check';

  public login(user): Observable<any> {
    let url     = 'http://127.0.0.1:8000/api/login_check';
    let body     = new URLSearchParams();
    body.append('username', user.username);
    body.append('password', user.password);
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
      //let options = new RequestOptions({headers: headers});
    let _options = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) }; 

  return this.http
          .post(url, body.toString(), _options)
      .pipe(map((data: Response) => data.json()));
  }
}
