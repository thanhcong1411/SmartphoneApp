import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';

@Component({
  selector: 'page-light',
  templateUrl: 'light.html',
})
export class LightPage implements OnInit, OnDestroy{
   @Input() light;
  
    lightValue: Number;
    lightValue_adjust: Number;
    preLightValue: Number;
    switchValue: Number;
    switchValue_adjust: Number;
    color: any;
    dis_dimmer: boolean;
    dis_rgb: boolean;
    dis_air: boolean;
    

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private events: Events) {
  }

  ngOnInit() {
    if(this.light.value != 0) {this.dis_dimmer=false;
                                this.dis_air=false } else {
                                                              this.dis_dimmer=true;
                                                              this.dis_air=true};
    if(this.light.typeOfLight=="RGB"){this.preLightValue = 16777215} else {this.preLightValue = 20};
    
    this.lightValue_adjust = this.switchValue_adjust = this.light.value;
    this.events.subscribe(this.light._id, (message:any) => {
      this.lightValue_adjust = message;
      this.preLightValue = this.switchValue_adjust = this.lightValue_adjust;
      console.log(message);  
  
   })
  
  }

  ngOnDestroy(){
    this.events.unsubscribe(this.light._id);
  }


  sendMessage(value){
    let message = {
        _id: this.light._id,
        value: value
    }
    
    this.events.publish("device-event", message);
  }

  getSwitchValue(value){
    if(this.light.typeOfLight=="RGB"){
      if(value){
        this.lightValue_adjust = this.preLightValue;
        this.sendMessage(this.lightValue_adjust);
      } else {
        this.lightValue_adjust = 0;
        this.sendMessage(this.lightValue_adjust);
      }
    } else {
      this.sendMessage(value&1);
    }
  }

  getSliderValue(value){
    this.preLightValue = this.switchValue_adjust = value;
    this.sendMessage(value);
    console.log('slide'+value)
  }

  getSwitchValue_Dimmer(value){
    console.log('toggle'+value)
    if(!value){
      this.dis_dimmer = true;
      this.dis_air = true;
      this.lightValue = 0;
      this.lightValue_adjust = 1;
    } else {
        this.dis_dimmer = false;
        this.dis_air = false;
       // this.lightValue = this.lightValue_adjust = this.preLightValue; cu
        this.lightValue = this.preLightValue;
        this.lightValue_adjust = 0;
      }
    
    this.sendMessage(this.lightValue);
    console.log('togglelightvalue'+ this.lightValue)
  }

  HEXToVBColor(rrggbb) {
    if(rrggbb.length==4){
      let r = rrggbb[1];
      let g = rrggbb[2];
      let b = rrggbb[3];
      rrggbb = '#' + r + r + g + g + b + b;
    }
    return parseInt(rrggbb.replace('#',''), 16);
  }


  getColor(value){
    console.log(value)
    this.lightValue_adjust = this.preLightValue = this.HEXToVBColor(value);
    this.sendMessage(this.lightValue_adjust);
  }

  

}



