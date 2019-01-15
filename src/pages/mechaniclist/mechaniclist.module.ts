import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MechaniclistPage } from './mechaniclist';

@NgModule({
  declarations: [
    MechaniclistPage,
  ],
  imports: [
    IonicPageModule.forChild(MechaniclistPage),
  ],
})
export class MechaniclistPageModule {}
