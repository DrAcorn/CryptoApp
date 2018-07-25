import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home'
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { PrincipalPage } from '../pages/principal/principal';
import { CifrarPage } from '../pages/cifrar/cifrar';
import { DescifrarPage } from '../pages/descifrar/descifrar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AboutPage } from '../pages/about/about';
import { InfoPage } from '../pages/info/info';


const firebaseAuth = {
    apiKey: "AIzaSyDq288jYxpQm2Ps00YntTq4Li4fdvJcE1g",
    authDomain: "cifrado-ec3f6.firebaseapp.com",
    databaseURL: "https://cifrado-ec3f6.firebaseio.com",
    projectId: "cifrado-ec3f6",
    storageBucket: "cifrado-ec3f6.appspot.com",
    messagingSenderId: "19166747775"
  };

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    HomePage,
    CifrarPage,
    DescifrarPage,
    AboutPage,
    PrincipalPage,
    InfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    HomePage,
    CifrarPage,
    DescifrarPage,
    AboutPage,
    PrincipalPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocialSharing
  ]
})
export class AppModule {}
