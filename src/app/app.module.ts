import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
// import { LongPressModule } from 'ionic-long-press'; // nhan mot cho lau


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LogginPage } from '../pages/loggin/loggin';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingPage } from '../pages/setting/setting';
import { AccessPage } from '../pages/access/access';
import { DevicesPage } from '../pages/devices/devices';
import { SensorPage } from '../pages/sensor/sensor';
import { LightPage } from '../pages/light/light';
import { ColorPicker } from '../pages/color-picker/colorpicker';
import { UsercontrolPage } from '../pages/usercontrol/usercontrol';


import { UserProvider } from '../providers/user/user';
import { HomeProvider } from '../providers/home/home';
import { AccesscontrolProvider } from '../providers/accesscontrol/accesscontrol';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LogginPage,
    TabsPage,
    SettingPage,
    AccessPage,
    DevicesPage,
    SensorPage,
    LightPage,
    ColorPicker,
    UsercontrolPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule,
    // LongPressModule
    

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LogginPage,
    TabsPage,
    SettingPage,
    AccessPage,
    DevicesPage,
    SensorPage,
    LightPage,
    ColorPicker,
    UsercontrolPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    HomeProvider,
    AccesscontrolProvider
  ]
})
export class AppModule {}
