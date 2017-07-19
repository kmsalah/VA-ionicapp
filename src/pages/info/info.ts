import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SurveyPage } from '../survey/survey';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';



@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {

  constructor(public navCtrl: NavController, private statusBar: StatusBar, public platform: Platform) {

  	}

  	goToSurvey()
  	{
  		this.navCtrl.push(SurveyPage);
  	}

  	returnHome()
  	{
  		this.navCtrl.pop();
  	}
  // let status bar overlay webview
}