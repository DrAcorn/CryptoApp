import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import CryptoJS from 'crypto-js';
import { AngularFireAuth } from 'angularfire2/auth';
import { SocialSharing } from '@ionic-native/social-sharing';



@IonicPage()
@Component({
  selector: 'page-descifrar',
  templateUrl: 'descifrar.html',
})
export class DescifrarPage {

  email: string ;
  mensaje: string = "";
  mensajedecifrado: string = "";

  constructor(public loadingCtrl:LoadingController,private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams,
  private socialSharing: SocialSharing) {

    this.email = fire.auth.currentUser.email;

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DescifrarPage');
  }

  descifrar(data:any){

    let loading = this.loadingCtrl.create({

      content: "descifrando..."

    });

    loading.present();

      this.mensajedecifrado = CryptoJS.AES.decrypt(this.mensaje.toString(), this.email).toString(CryptoJS.enc.Utf8);
      loading.dismiss();

  }

  Refresh(refresher: any){

    console.log('refrescando', refresher);

    setTimeout(() => {
      console.log('termino el refresh');
      this.mensaje="";
      this.mensajedecifrado="";
      refresher.complete();
    }, 1500);

  }

  compartir(data : any){

   this.socialSharing.share(this.mensajedecifrado.toString()).then(()=>{
   }).catch(()=>{

   });

 }

}
