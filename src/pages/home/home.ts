import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';

import { InfoPage } from '../info/info';
import { SurveyPage } from '../survey/survey';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private statusBar: StatusBar, public platform: Platform) {

	}

  takeSurvey()
  {
  	this.navCtrl.push(InfoPage);
  }
}
