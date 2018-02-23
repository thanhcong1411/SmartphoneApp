import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


@Injectable()
export class HomeProvider {
  host: String;
  authToken: any;

  constructor(public http: Http,
              private storage: Storage
              ) {
    console.log('Hello HomeProvider Provider');
  }

  getHost(addHost){
    this.host = addHost;
  }

  getListOfFloors(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://' + this.host + ':3000/house/floors', {headers: headers})
      .map(res => res.json());
  }

  getListOfRooms(floorId){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://' + this.host + ':3000/house/floors/' + floorId + '/rooms', {headers: headers})
      .map(res => res.json());
  }

  getListOfDevicesInRoom(roomId){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://' + this.host + ':3000/house/floors/rooms/' + roomId + '/devices', {headers: headers})
      .map(res => res.json());
  }

  loadToken(){
    const token = this.storage.get('id_token');
    this.authToken = token;
  }

}
