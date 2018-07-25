import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  email:string="";

  constructor(public navCtrl: NavController, public navParams: NavParams,private fire: AngularFireAuth, public loadingCtrl: LoadingController) {

    this.email = fire.auth.currentUser.email;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfoPage');
  }

  salir(){

    this.fire.auth.signOut()
    .then( data => {
      const loader = this.loadingCtrl.create({
        content: "Cerrando sesión...",
        duration: 1000
      });
      loader.present();
      let elements = document.querySelectorAll(".tabbar");

    if (elements != null) {
        Object.keys(elements).map((key) => {
            elements[key].style.display = 'none';
        });
    }
      this.navCtrl.setRoot(HomePage);

    })
    .catch( error => {
      console.log('Tenemos un error', error);
    })
  	console.log('cesion terminada');
  }


}
