import { Component, OnInit } from '@angular/core';

import { HomePage } from '../home/home';
import { AccessPage } from '../access/access';
import { SettingPage } from '../setting/setting';
import { NavController, Events } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage implements OnInit{
  
  tab1Root = HomePage;
  tab2Root = AccessPage;
  tab3Root = SettingPage;

  constructor(private NavCtrl: NavController,
              private events: Events,
              public alertCtrl: AlertController) {
  }

  ngOnInit(){
    this.events.subscribe('loggout',(val)=>{
      this.NavCtrl.pop();
    })

  //security
     this.events.subscribe('security-event', (message) =>{
      let alert = this.alertCtrl.create({
        title: 'WARNING!',
        subTitle: 'Attention-Attention!',
        buttons: [ {
          text: 'OK',
          handler: () => {
            let mess = {
              _id: message._id,
              value: 0
            }
            this.events.publish('device-event', mess);
          }
        }]
      });
      alert.present();
    });
  }

}
