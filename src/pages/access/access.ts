import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AccesscontrolProvider } from '../../providers/accesscontrol/accesscontrol'
import { UsercontrolPage } from '../usercontrol/usercontrol'
@Component({
  selector: 'page-access',
  templateUrl: 'access.html',
})
export class AccessPage implements OnInit{
  listOfUsers = [];
  newUserName: String;
  addShow: Boolean = false;
  users =[];
  filteredUsers = [];
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private accessControlService: AccesscontrolProvider) {
  }

  ngOnInit() {
    this.getListOfUsers();
    }

  getListOfUsers(){
      this.accessControlService.getListOfUsers().subscribe(res=>{
        if(!res.success){
          console.log(res.msg)
          this.listOfUsers = [];
        } else {
          this.listOfUsers = res.users;
        }
      })
    }
  
  adduserSubmit(newUserName){
      let newUser = {
        name: newUserName
      }
      this.accessControlService.addNewUser(newUser).subscribe(res=>{
        if(!res.success){
          console.log(res.msg)
        } else {
          this.getListOfUsers();
        }
      })
    }

  show(){
   this.addShow= !this.addShow;
  }
  GoDetail(user){
    this.navCtrl.push(UsercontrolPage, user)
  }

  deleteUser(user){
    this.accessControlService.deleteUser(user._id).subscribe(res=>{
      if(!res.success){
        console.log(res.msg)
      } else {
        this.getListOfUsers();
      }
    })
    // delete all qrcode in this user
    this.accessControlService.getListOfQRcodes().subscribe(data =>{
      if(data.success){
       
       this.users = data.users;
       for(let usr of this.users){
         if (usr.userId == user._id){
            this.filteredUsers.push(usr);
         }
        }       
      } else {
        this.filteredUsers = []
       }
// delete array
       for(let ur of this.filteredUsers){
        
        this.accessControlService.deleteQRUser(ur._id).subscribe(res=>{
          if(!res.success){
            console.log(res.msg)
          } else {
            
            this.filteredUsers = [];
            }
        }); 
       
      }
      })

  }

}
