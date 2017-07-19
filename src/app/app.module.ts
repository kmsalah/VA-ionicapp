import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { MultiPickerModule } from 'ion-multi-picker';


import { SurveyPage } from '../pages/survey/survey';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DiagnosisPage } from '../pages/diagnosis/diagnosis';
import { SituationPage } from '../pages/situation/situation';
import { PrioritiesPage } from '../pages/priorities/priorities';
import { TreatmentPage } from '../pages/treatment/treatment';
import { InfoPage } from '../pages/info/info';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { ResponseService } from '../providers/response-service';

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
    SurveyPage,
    ContactPage,
    HomePage,
    InfoPage,
    TabsPage,
    
    DiagnosisPage,
    SituationPage,
    PrioritiesPage,
    TreatmentPage
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
    SurveyPage,
    ContactPage,
    HomePage,
    InfoPage,
    TabsPage,
    
    DiagnosisPage,
    SituationPage,
    PrioritiesPage,
    TreatmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireDatabase,
    AngularFireAuth,
    ResponseService
  ]
})
export class AppModule {}
