import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoggedinPage } from '../loggedin/loggedin';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	@ViewChild('username') user;
	@ViewChild('password') password;
  email: string = null;

  constructor(private alertCtrl: AlertController, private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams,
  public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signInUser() {

    this.fire.auth.signInWithEmailAndPassword(this.user.value , this.password.value)
    .then( data => {
      const loader = this.loadingCtrl.create({
        content: "Iniciando sesión...",
        duration: 1000
      });
      loader.present();
      console.log('Leer data', this.fire.auth.currentUser);
      this.navCtrl.setRoot( LoggedinPage );

    })
    .catch( error => {
      console.log('Tenemos un error', error);
      this.alert(error.message);
    })
  	console.log('Autenticado correctamente');
  }

//Reseteo de contraseñaaaa
      resetpswd= function(){

      this.fire.auth.sendPasswordResetEmail(this.user.value).then( data => {
      this.alert('Hemos enviado un correo a: '+ this.user.value );

    })
    .catch( error => {
      console.log('Tenemos un error', error);
      this.alert(error.message);
    })
  	console.log('Correo de recuperacion enviado');

  }

}
