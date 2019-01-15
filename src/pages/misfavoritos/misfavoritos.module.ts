import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisfavoritosPage } from './misfavoritos';

@NgModule({
  declarations: [
    MisfavoritosPage,
  ],
  imports: [
    IonicPageModule.forChild(MisfavoritosPage),
  ],
})
export class MisfavoritosPageModule {}
