import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';
import { DevicesPage } from '../devices/devices';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  floors = [];
  rooms = [];
  CurrentId: String;
  
  
  constructor(public navCtrl: NavController,
              private homeService: HomeProvider,
              private toastCtrl: ToastController) {

  }
  
  ngOnInit(){
    this.homeService.getListOfFloors().subscribe(res => {
      if(!res.success){
        console.log(res.msg)
      } else{
        this.floors = res.floors;
        let floor = this.floors[0];
        this.currentfloor(floor._id);
      }
    },
    err => {
        console.log(err);
        return false;
    });

  }

  getListOfFloors(){
    this.homeService.getListOfFloors().subscribe(res => {
      if(!res.success){
        console.log(res.msg)
      } else{
        this.floors = res.floors;
     }
    },
    err => {
        console.log(err);
        return false;
    });
  }

  currentfloor(id){
    
    this.CurrentId = id;

    this.homeService.getListOfRooms(id).subscribe(res => {
      if(res.success===false){
        let toast = this.toastCtrl.create({
          message: res.msg,
          duration: 2000,
          position: 'top'
        });
        toast.present();
        
      } else {
        if(res.length){
          this.rooms = res;
        } else {
          this.rooms = [];
          let toast = this.toastCtrl.create({
            message: 'No room found. Please add new room!!!',
            duration: 2000,
            position: 'top'
          });
          toast.present();
          
        }
      }
    })
  }

  devicesInRoom(id,name,imgPath){
    let deviceroom = {
      roomid: id,
      roomname: name,
      imgPath: imgPath
    }
   
    this.navCtrl.push(DevicesPage, deviceroom);

  }

}
