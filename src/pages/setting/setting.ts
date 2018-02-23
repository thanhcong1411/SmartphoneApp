import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController, Events } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';


@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
  })
export class SettingPage implements OnInit{  
  user: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private userService: UserProvider,
              public toastCtrl: ToastController,
              private events: Events) {
  }

  ngOnInit() {
    this.userService.getProfile().subscribe(profile => {
      this.user = profile.user;
      console.log(this.user);
    },
    err => {
        console.log(err);
        return false;
    });
  }

  loggout(){
    this.events.publish('loggout','ok');  
    this.userService.logout();
    let toast = this.toastCtrl.create({
      message: 'You are logged out!',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  
  }
}
