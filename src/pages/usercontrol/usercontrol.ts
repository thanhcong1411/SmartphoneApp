import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController, Events } from 'ionic-angular';
import { AccesscontrolProvider } from '../../providers/accesscontrol/accesscontrol';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-usercontrol',
  templateUrl: 'usercontrol.html',
})
export class UsercontrolPage implements OnInit{
  user: any;
  users: any;
  filteredUsers = [];
  isFingerprintAvailable: Boolean = false;
  isQRcodeAvailable: Boolean = false;
  grayFilter = {filter: 'grayscale(100%)', color: 'gray'};
  sensorMessage: any;
  sensorMessage2: any;
  alert: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public toastCtrl: ToastController,
              private accesscontrolService: AccesscontrolProvider,
              public alertCtrl: AlertController,
              private events: Events) {
  }
  
ngOnInit(){
  this.user = this.navParams.data;
  this.getQRcodeInUser();
  this.isFingerprintAvailable = !!this.user.fingerprintId.length;

}
// QRCODE
getQRcodeInUser(){  
this.accesscontrolService.getListOfQRcodes().subscribe(data =>{
  if(data.success){
   this.users = data.users;
   for(let usr of this.users){
     if (usr.userId == this.user._id){
        this.filteredUsers.push(usr);
     }
    }
    this.isQRcodeAvailable = !!this.filteredUsers.length;
  } else {
    this.filteredUsers = [];
    console.log(data.msg);
   }
  })
}

presentConfirmDeleteOneQR(usr) {
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Do you want to delete this?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log(usr._id)
            this.accesscontrolService.deleteQRUser(usr._id).subscribe(res=>{
              if(!res.success){
                console.log(res.msg)
              } else {
                this.filteredUsers = [];
                this.getQRcodeInUser();
              }
            }); 
            
          }
        }
      ]
    });
    alert.present();
  }

presentConfirmDeleteAllQR(){
  let alert = this.alertCtrl.create({
    title: 'Confirm Delete-All',
    message: 'Do you want to delete all of this?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          for(let usr of this.filteredUsers){
            this.accesscontrolService.deleteQRUser(usr._id).subscribe(res=>{
              if(!res.success){
                console.log(res.msg)
              } else {
                this.filteredUsers = [];
                this.getQRcodeInUser();
              }
            }); 
           
          }
        }
      }
    ]
  });
  alert.present();
}

presentPromptCreateQR() {
  let alert = this.alertCtrl.create({
    title: 'Add New QR',
    inputs: [
      {
        name: 'username',
        placeholder: 'Username'
      },
      {
        name: 'email',
        placeholder: 'Email'
        
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'OK',
        handler: data => {

          const QRuser = {
            name: data.username,
            email: data.email,
            _userId: this.user
          }
          
          //Required Fields
          if(!this.accesscontrolService.validateQRcode(QRuser)) {
            let toast = this.toastCtrl.create({
              message: 'please fill all fields',
              duration: 3000,
              position: 'top'
           });
           toast.present();
          return false;
          }
          
          // Required Email
          if(!this.accesscontrolService.validateEmail(QRuser.email)) {
            let toast = this.toastCtrl.create({
              message: 'Invalid Email',
              duration: 3000,
              position: 'top'
           });
           toast.present();
           return false;
          }
          
          // Register QRcode
          this.accesscontrolService.registerQRcode(QRuser).subscribe(data => {
            if(data.success){
              let toast = this.toastCtrl.create({
                message: 'Success',
                duration: 3000,
                position: 'top'
             });
             toast.present();
              } else {
                let toast = this.toastCtrl.create({
                  message: 'try again, Error!',
                  duration: 3000,
                  position: 'top'
               });
               toast.present();
              
            }
            this.filteredUsers = [];
            this.getQRcodeInUser();  
          })
    
        }
      }
    ]
  });
  alert.present();
}
//end of QRCODE

//finger
presentConfirmDeleteAllFG(){
  let alert = this.alertCtrl.create({
    title: 'Confirm Delete-All',
    message: 'Do you want to delete all of this?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          let message = {
            command: 'deleteFingerprints',
            user: this.user._id
          }
          this.events.publish('access-control/fingerprint', message);
          this.isFingerprintAvailable = false;
        }
      }
    ]
  });
  alert.present();
}

connectSensor(){
  this.sensorMessage = "Place your finger";
  this.sensorMessage2 = "on the sensor";
  this.events.subscribe('access-control/fingerprint/enrol/message', (message:String)=>{
    console.log(message);
    this.alert.dismiss();// moithem
    this.sensorMessage2 = '';
    this.sensorMessage = message;
    //this.presentAlert(); thay cai nay bang cai duoi
    this.alert = this.alertCtrl.create({
      title: this.sensorMessage,
      subTitle: this.sensorMessage2,
      buttons: ['OK']
    });
    this.alert.present();
    if(message=="Complete!"){
      this.isFingerprintAvailable = true;
      this.events.unsubscribe('access-control/fingerprint/enrol/message')
    }
  })
  let message = {
    command: 'enrol',
    user: this.user._id
  }
  this.events.publish('access-control/fingerprint', message);
  //this.presentAlert();thay cai nay bang cai duoi
  this.alert = this.alertCtrl.create({
    title: this.sensorMessage,
    subTitle: this.sensorMessage2,
    buttons: ['OK']
  });
  this.alert.present();
}

presentAlert() {
  const alert = this.alertCtrl.create({
    title: this.sensorMessage,
    subTitle: this.sensorMessage2,
    buttons: ['OK']
  });
  alert.present();
}

// end of finger
}



