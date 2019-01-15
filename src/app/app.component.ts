import { SocialPage } from './../pages/social/social';
import { MisfavoritosPage } from './../pages/misfavoritos/misfavoritos';
import { LoginPage } from './../pages/login/login';
import { PageInterface } from './model/pageinterface';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
   @ViewChild(Nav) nav: Nav;


  menuPages: PageInterface[] = [
    { titulo: 'Solicitar Ayuda', nombre: 'HomePage', component: HomePage, icon: 'pin' },
    { titulo: 'Servicios', nombre: 'ServiciosPage', component: HomePage, icon: 'ios-list-box' }

  ];

  menuCuenta: PageInterface[] = [

    { titulo: 'Login', nombre: 'LoginPage', component: LoginPage, icon: 'key' },
    { titulo: 'Mis Favoritos', nombre: 'MisfavoritosPage', component: MisfavoritosPage, icon: 'heart' },
    { titulo: 'Compartir', nombre: 'SocialPage', component: SocialPage, icon: 'share' }
  ]

  
  rootPage: any = HomePage;
  

  constructor(public platform: Platform,
   public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
    this.initializeApp();


  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page: PageInterface) {
    this.nav.setRoot(page.component);
  }

  
  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs();
    if (this.nav.getActive() &&  this.nav.getActive().name === page.nombre) {
      return 'goRepair';
    }
    return;
  }

  signOut(){
    console.log("Hola");
  }
}
