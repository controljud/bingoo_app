import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BingooPage } from './bingoo';

@NgModule({
  declarations: [
    BingooPage,
  ],
  imports: [
    IonicPageModule.forChild(BingooPage),
  ],
})
export class BingooPageModule {}
