import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-misfavoritos',
  templateUrl: 'misfavoritos.html',
})
export class MisfavoritosPage {

  public mechanics: any = [];
  public object: any = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public api: ApiProvider,
    public loadCtrl: LoadingController) {
    this.getMechanics();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MechaniclistPage');
  }

  getMechanics() {
    let loader = this.loadCtrl.create({
      content: 'Por favor espere...'
    });
    loader.present().then(() => {
      this.api.getClientIsMechanic()
        .then(data => {
          this.object = data;
          for (let m of this.object) {
            this.mechanics.push(m.mechanics);
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
