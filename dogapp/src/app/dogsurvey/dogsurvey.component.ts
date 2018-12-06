import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../config-service';
import { Config } from 'protractor';

@Component({
  selector: 'app-dogsurvey',
  templateUrl: './dogsurvey.component.html',
  styleUrls: ['./dogsurvey.component.scss'],
  providers: [NgbModule]
})
export class DogsurveyComponent implements OnInit {

  envir: string = '';
  size: string = '';
  energy: string = '';
  timeAlone: string = '';
  otherPets: string = '';
  hypoAll: string = '';
  spNeeds: string = '';

  suggestedDogs = {};

  constructor(private config: ConfigService) { }

  ngOnInit() {
  }

  submitSurvey() {
    
    //validate all the survey responses, change anything blank to NULL

    //create observable, then send observable to service and do http post in the service
    var answers: string[];
    answers = [this.envir, this.size, this.energy, this.otherPets, this.timeAlone, this.spNeeds, this.hypoAll];

    this.suggestedDogs = this.config.getDogFilter(answers);
    console.log(this.suggestedDogs);
    
  }

}
