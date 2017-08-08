import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { ResponseService } from '../../providers/response-service';



@Component({
    selector: 'page-priorities',
    templateUrl: 'priorities.html'
})

export class PrioritiesPage 
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
    comments: '',
    questionTwo: '',
    questionOne: ''
   };

	constructor(public navCtrl: NavController,
        private responseHandler: ResponseService)
	{

	}//end constructor


	saveQuestionInfo() 
    {
        console.log("priorities.ts");
        this.responseHandler.saveQuestionOneInfo(this.treatmentResponse.questionOne);
        this.responseHandler.saveQuestionTwoInfo(this.treatmentResponse.questionTwo);
        this.responseHandler.saveQuestionThreeInfo(this.treatmentResponse)
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