import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DescifrarPage } from './descifrar';

@NgModule({
  declarations: [
    DescifrarPage,
  ],
  imports: [
    IonicPageModule.forChild(DescifrarPage),
  ],
  exports: [
    DescifrarPage
  ]
})
export class DescifrarPageModule {}
