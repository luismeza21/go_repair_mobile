import { MechaniclistPageModule } from './../pages/mechaniclist/mechaniclist.module';
import { searchPage } from './../pages/home/search';
import { SocialPageModule } from './../pages/social/social.module';
import { RegisterPageModule } from './../pages/register/register.module';
import { MisfavoritosPageModule } from './../pages/misfavoritos/misfavoritos.module';
import { LoginPageModule } from './../pages/login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MechanicPageModule } from './../pages/mechanic/mechanic.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    searchPage
  ],
  imports: [
    BrowserModule,
    MechanicPageModule,
    SocialPageModule,
    LoginPageModule,
    MisfavoritosPageModule,
    RegisterPageModule,
    MechaniclistPageModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    searchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ApiProvider
  ]
})
export class AppModule { }
