import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import CryptoJS from 'crypto-js';
import { SocialSharing } from '@ionic-native/social-sharing';


@IonicPage()
@Component({
  selector: 'page-cifrar',
  templateUrl: 'cifrar.html',
})
export class CifrarPage {

  destino: string = "";
  mensaje: string = "";
  mensajecifrado: string = null;

  constructor(public loadingCtrl:LoadingController, public navCtrl: NavController, public navParams: NavParams, private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CifrarPage');
  }

  cifrar(data:any) {

    let loading = this.loadingCtrl.create({

      content: "cifrando..."

    });

    loading.present();

    this.mensajecifrado = CryptoJS.AES.encrypt(this.mensaje, this.destino);
    this.destino = "";
    this.mensaje = "";

    loading.dismiss();

  }

   compartir(data : any){

    this.socialSharing.share(this.mensajecifrado.toString()).then(()=>{
    this.mensajecifrado = "";
    }).catch(()=>{

    });

  }


}
