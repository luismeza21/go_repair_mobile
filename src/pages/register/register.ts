import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//user
import { User } from './../../app/model/user';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  user = {} as User;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {
  }

  async register(user: User) {

  }

}
