import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


import { HomePage } from '../home/home';

import { ResponseService } from '../../providers/response-service';



@Component({
    selector: 'page-treatment',
    templateUrl: 'treatment.html'
})

export class TreatmentPage 
{

	public treatmentResponse =
   {
    questionThree: {
      optionA: false,
      optionB: false,
      optionC: false,
      optionD: false,
      optionE: false
    },
    comments: ''
   };

	constructor(public navCtrl: NavController,
        private responseHandler: ResponseService,private alertCtrl: AlertController)
	{

	}//end constructor


	saveQuestionInfo() 
   {
        console.log("situation.ts");
        //this.responseHandler.saveQuestionThreeInfo(this.treatmentResponse);
        this.presentAlert();
        //this.navCtrl.setRoot(HomePage);
        this.navCtrl.parent.parent.pop();
   }

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Thank you for completing this survey',
    buttons: ['Dismiss']
  });
  alert.present();
}


backButton()
{
  this.navCtrl.parent.select(2);
}

homeButton()
{
  this.navCtrl.parent.parent.pop();
}

}//end class