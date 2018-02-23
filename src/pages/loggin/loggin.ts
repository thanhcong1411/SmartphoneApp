import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, Events } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { HomeProvider } from '../../providers/home/home';
import { AccesscontrolProvider } from '../../providers/accesscontrol/accesscontrol';

import { TabsPage} from '../tabs/tabs';
import * as io from 'socket.io-client';

@Component({
  selector: 'page-loggin',
  templateUrl: 'loggin.html',
})

export class LogginPage {
  username: String;
  password: String;
  public host: String;
  private socket;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              public user: UserProvider,
              public home: HomeProvider,
              public access: AccesscontrolProvider,
              private events: Events
              ) {
  }
  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password,
      host: this.host
    }
    this.user.authenticateUser(user).subscribe(data => {
      if(data.success){
        this.user.storeUserData(data.token, data.user);
        let toast = this.toastCtrl.create({
          message: 'You are logged in!',
          duration: 3000,
          position: 'top'
        });
        toast.present();
        this.navCtrl.push(TabsPage);
      } else {
        console.log('notok');
        let toast = this.toastCtrl.create({
          message: data.msg,
          duration: 3000,
          position: 'top'
       });
       toast.present();
        
      };
    });

    this.home.getHost(this.host);
    this.access.getHost(this.host);
  
    this.socket = io('http://' + this.host + ':4000');
    
        this.socket.on('device-event', (data) => {
          this.events.publish(data._id, data.value);
        });
    
        this.events.subscribe('device-event', (message) => {
          this.socket.emit("device-event", message)
        });
        
    
        this.socket.on('access-control/fingerprint/enrol/message', data=>{
          console.log(data)
          this.events.publish('access-control/fingerprint/enrol/message', data);
        });
    
        this.events.subscribe('access-control/fingerprint', (message) =>{
          this.socket.emit("access-control/fingerprint", message)
        });
        
    
        this.socket.on('access-control/face-recognition/enrol/message', data=>{
          console.log(data)
          this.events.publish('access-control/face-recognition/enrol/message', data);
        })
    
        this.events.subscribe('access-control/face-recognition', (message) =>{
          this.socket.emit("access-control/face-recognition", message)
        });
        
    
        this.socket.on('security-event', data=>{
          this.events.publish('security-event', data);
        })
    
       
      
     
  }

  
  

}
