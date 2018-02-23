import { Component, OnInit, Input } from '@angular/core';
import { NavController, NavParams, Events } from 'ionic-angular';


@Component({
  selector: 'page-sensor',
  templateUrl: 'sensor.html',
})
export class SensorPage implements OnInit{
  @Input() sensor;

  message: any;
  value: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private events: Events) {
  }

  ngOnInit(){
    
    this.value = this.sensor.value;
    this.events.publish("socketOn", this.sensor._id);
    this.events.subscribe(this.sensor._id, (message)=>{
      this.value = message;
    })
  }

}
