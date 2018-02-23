import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class UserProvider {

  authToken: any;
  user: any;
  host: String;

  constructor(public http: Http,
              private storage: Storage
              ) {
    console.log('Hello UserProvider Provider');
  }

  authenticateUser(user){
    this.host = user.host;
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://' + this.host + ':3000/users/authenticate', user, {headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user){
    this.storage.set('id_token', token);
    this.storage.set('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loadToken(){
    this.storage.get('id_token').then((val) => {
      this.authToken = val;
    });
  }

  logout(){
    this.authToken = null;
    this.user = null;
    this.storage.clear();
  }

  loggedIn(){
    return tokenNotExpired('id_token');
    }

  getProfile(){
      let headers = new Headers();
      this.loadToken();
      headers.append('Authorization', this.authToken);
      headers.append('Content-Type', 'application/json');
      return this.http.get('http://' + this.host + ':3000/users/profile', {headers: headers})
        .map(res => res.json());
    }

}
