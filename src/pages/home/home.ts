import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SurveyPage } from '../survey/survey';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {


  }

  takeSurvey()
  {
  	this.navCtrl.push(SurveyPage);
  }

}
