import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


@Injectable()

export class ResponseService {

 responses: FirebaseListObservable<any[]>;

 public newResponse = 
  {
    age: 0,
    race: '',
    psaLevel: '',
    weight: 0,
    height: '',
    questionOne: '',
    questionTwo: '',
    questionThree: {
      optionA: false,
      optionB: false,
      optionC: false,
      optionD: false,
      optionE: false
    },
    comments: ''
   };


constructor(db: AngularFireDatabase, afAuth: AngularFireAuth)
{

	this.responses = db.list('/Responses'); //grabbing the responses object from firebase
    afAuth.authState; //a requirement for firebase */
}


saveDiagnosisInfo(info)
{
	this.newResponse.age = info.age;
	this.newResponse.race = info.race;
	this.newResponse.psaLevel = info.psaLevel;
	this.newResponse.weight = info.weight;
	this.newResponse.height = info.height;


    //this.responses.push(this.newResponse); 
}

saveQuestionOneInfo(questionOne)
{
	this.newResponse.questionOne = questionOne;
}

saveQuestionTwoInfo(questionTwo)
{
  this.newResponse.questionTwo = questionTwo;
}

saveQuestionThreeInfo(questionThree)
{
  this.newResponse.questionThree = questionThree.questionThree;
  this.newResponse.comments = questionThree.comments;
  this.responses.push(this.newResponse); 
}



}