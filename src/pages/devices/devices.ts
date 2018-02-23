import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home'

@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
})
export class DevicesPage implements OnInit, OnDestroy{
  

  deviceInRoom: any;
  devices: any;
  lightingControls = [];
  sensorModules = [];
  value: any;
  

  messageEvent: any;
  lightValue: Number;
  preLightValue: Number;
  switchValue: Number;
  color: any;
 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private homeService: HomeProvider,
              public events: Events){ }
  ngOnInit(){
    
    this.deviceInRoom = this.navParams.data;
    
    
    this.homeService.getListOfDevicesInRoom(this.deviceInRoom.roomid).subscribe(res=>{
      this.devices = res.devices;
      if(this.devices){
        for(let device of this.devices){
          switch(device.deviceType){
            case "LightingControl":
              this.lightingControls.push(...device.lights);
              break;
            case "SensorModule":
              this.sensorModules.push(...device.sensors);
              
              break;
          }
        }
        for(let i=0; i<this.sensorModules.length; i++){
          if(this.sensorModules[i]._type=="Door"){
            let tmp =  this.sensorModules[0];
            this.sensorModules[0] = this.sensorModules[i];
            this.sensorModules[i] = tmp;
          } else if(this.sensorModules[i]._type=="Window"){
            let tmp =  this.sensorModules[1];
            this.sensorModules[1] = this.sensorModules[i];
            this.sensorModules[i] = tmp;
              }
          
            }
          }
        });

       
}

ngOnDestroy(){
  
}
}