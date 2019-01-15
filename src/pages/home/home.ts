import { MechaniclistPage } from './../mechaniclist/mechaniclist';
import { searchPage } from './search';


import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

   public search = [];
  public ubicacion: any = false;

  constructor(
    public navCtrl: NavController,
  ) {
    this.search = [
      {
        titulo: 'Donde estás buscando ?',
        icon: 'locate',
        color: '#0CA9EA'
      }

    ];
  }

  buscarTenicos(){
    if(this.ubicacion == true){
     //this.navCtrl.push(FindtenicosPage);
    }else{
     this.navCtrl.push(MechaniclistPage);
    }
      
     
  }

  openDetailSearch(search){
    this.navCtrl.push(searchPage, { search: search });
  }

  soyMecanico(){
   //  this.navCtrl.push(ProfilMechanic);
  }

}
