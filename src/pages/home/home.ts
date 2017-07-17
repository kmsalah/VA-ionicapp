import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SurveyPage } from '../survey/survey';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private statusBar: StatusBar, public platform: Platform) {

		

  	}

  // let status bar overlay webview


  takeSurvey()
  {
  	this.navCtrl.push(SurveyPage);
  }

}
