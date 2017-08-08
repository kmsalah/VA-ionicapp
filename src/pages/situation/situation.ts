import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

import { ResponseService } from '../../providers/response-service';



@Component({
    selector: 'page-situation',
    templateUrl: 'situation.html'
})

export class SituationPage 
{

	public questionOne = '';

	constructor(public navCtrl: NavController,
        private responseHandler: ResponseService)
	{

	}//end constructor


	saveQuestionInfo() 
    {
       // console.log("situation.ts");
        //this.responseHandler.saveQuestionOneInfo(this.questionOne);
        this.navCtrl.parent.select(2);
    }

    backButton()
    {
        console.log("back");
        this.navCtrl.parent.select(0);
    }

    homeButton()
    {
        this.navCtrl.parent.parent.pop();
    }
}//end class