import { RegisterPage } from './../register/register';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from './../../app/model/user';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }


  ionViewDidLoad() {
  }

  async login(user: User) {

  }

  signInWithFacebook() {

  }

  register() {
    this.navCtrl.push(RegisterPage);
  }

}
