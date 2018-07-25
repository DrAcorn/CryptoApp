import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home'



@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  email:string= "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth, public loadingCtrl: LoadingController) {

    this.email = fire.auth.currentUser.email;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }


  salir(){

    this.fire.auth.signOut()
    .then( data => {
      const loader = this.loadingCtrl.create({
        content: "Cerrando sesión...",
        duration: 1000
      });
      loader.present();
      this.navCtrl.setRoot( HomePage );

    })
    .catch( error => {
      console.log('Tenemos un error', error);
    })
  	console.log('cesion terminada');
  }


}
