import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { MultiPickerModule } from 'ion-multi-picker';


import { QuizPage } from '../pages/quiz/quiz';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ResultPage } from '../pages/result/result';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


export const firebaseConfig = {
  apiKey: "AIzaSyAMQ-49Y8Pdr4E4e-CzJVujTZN5L231I7Y",
  authDomain: "vapp-e179d.firebaseapp.com",
  databaseURL: "https://vapp-e179d.firebaseio.com",
  projectId: "vapp-e179d",
  storageBucket: "vapp-e179d.appspot.com",
  messagingSenderId: "229757817225"
};


@NgModule({
  declarations: [
    MyApp,
    QuizPage,
    ContactPage,
    HomePage,
    TabsPage,
    ResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
      AngularFireModule.initializeApp(firebaseConfig),
      MultiPickerModule //https://github.com/raychenfj/ion-multi-picker
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QuizPage,
    ContactPage,
    HomePage,
    TabsPage,
    ResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,
    AngularFireAuth
  ]
})
export class AppModule {}
