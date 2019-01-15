import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-mechanic',
  templateUrl: 'mechanic.html',
})
export class MechanicPage {

  public listMechanics: any = [];
  public mechanic: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: ApiProvider) {
    this.getIsMechanic();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MechanicPage');
  }

  getIsMechanic(){
    this.api.getClientIsMechanic()
    .then(data =>{
      this.listMechanics = data;
      for(let mecha of this.listMechanics.mechanics){
        this.mechanic.push(mecha);
      }
      console.log(this.mechanic);
    })
  }

}
