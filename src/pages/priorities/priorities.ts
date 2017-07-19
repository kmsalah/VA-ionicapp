import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { ResponseService } from '../../providers/response-service';



@Component({
    selector: 'page-priorities',
    templateUrl: 'priorities.html'
})

export class PrioritiesPage 
{

	public questionTwo = '';

	constructor(public navCtrl: NavController,
        private responseHandler: ResponseService)
	{

	}//end constructor


	saveQuestionInfo() 
    {
        console.log("priorities.ts");
        this.responseHandler.saveQuestionTwoInfo(this.questionTwo);
        this.navCtrl.parent.select(3);
    }

     backButton()
    {
        console.log("back");
        this.navCtrl.parent.select(1);
    }

    homeButton()
    {
        this.navCtrl.parent.parent.pop();
    }

}//end class