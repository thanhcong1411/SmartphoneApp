import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AccesscontrolProvider {
  authToken: any;
  host: String;
  constructor(public http: Http,
              private storage: Storage
              ) {}

getHost(addHost){
  this.host = addHost;
}

loadToken(){
    const token = this.storage.get('id_token');
    this.authToken = token;
}

getListOfUsers(){
  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  return this.http.get('http://' + this.host + ':3000/access-control/users', {headers: headers})
    .map(res => res.json());
}

addNewUser(newUser){
  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  return this.http.post('http://' + this.host + ':3000/access-control/users', newUser, {headers: headers})
    .map(res => res.json());
}

deleteUser(userId){
  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  return this.http.delete('http://' + this.host + ':3000/access-control/users/' + userId, {headers: headers})
    .map(res => res.json());
}

getUserName(userId){
  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  return this.http.get('http://' + this.host + ':3000/access-control/users/' + userId + '/name', {headers: headers})
    .map(res => res.json());
}

updateImgPath(userId, imgPath){
  let headers = new Headers();
  this.loadToken();
  headers.append('Authorization', this.authToken);
  headers.append('Content-Type', 'application/json');
  return this.http.put('http://' + this.host + ':3000/access-control/users/' + userId + '/img-path', imgPath, {headers: headers})
    .map(res => res.json());
}

//QRcode
  validateQRcode(user){
    if(user.name == undefined || user.email == undefined) {
      return false;
    } else {
    return true;
    }
  }

  registerQRcode(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://' + this.host + ':3000/users/qrcode', user, {headers: headers})
      .map(res => res.json());
  }

  getListOfQRcodes(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://' + this.host + ':3000/users/qrcode', {headers: headers})
      .map(res => res.json());
  }

  deleteQRUser(userId){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.delete('http://' + this.host + ':3000/users/qrcode/' + userId, {headers: headers})
      .map(res => res.json());
  }  
// endQRCODE

validateEmail(email){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

}
