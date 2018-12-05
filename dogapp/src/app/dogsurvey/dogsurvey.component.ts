import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment.prod';

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

  constructor() { }

  ngOnInit() {
  }

  submitSurvey() {
    
    //validate all the survey responses, change anything blank to NULL

    //create observable, then send observable to service and do http post in the service
  }

}
