import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CifrarPage } from './cifrar';

@NgModule({
  declarations: [
    CifrarPage,
  ],
  imports: [
    IonicPageModule.forChild(CifrarPage),
  ],
  exports: [
    CifrarPage
  ]
})
export class CifrarPageModule {}
