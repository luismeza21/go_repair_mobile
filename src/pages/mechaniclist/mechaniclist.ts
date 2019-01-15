import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-mechaniclist',
  templateUrl: 'mechaniclist.html',
})
export class MechaniclistPage {

  public mechanics: any = [];
  public object: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiProvider,
    public loadCtrl: LoadingController) {
      this.getMechanics();
  }

  ionViewDidLoad() {
    console.log('MechaniclistPage iniciado');
  }

  getMechanics() {
    let loader = this.loadCtrl.create({
      content: 'Por favor espere...'
    });
    loader.present().then(() => {
      this.api.getClientIsMechanic()
        .then(data => {
          this.object = data;
          for (let mechanic of this.object.mechanics) {
            this.mechanics.push(mechanic);
          }
          console.log(this.mechanics);
          loader.dismiss();
        });
    });
    setTimeout(() => {
      loader.dismiss();
    }, 5000);

  }

}
