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

  envir: string = 'apartment';
  size: string = 'small';
  energy: string = 'lazy';
  timeAlone: string = 'no';
  otherPets: string = 'low';
  hypoAll: string = 'no';
  spNeeds: string = 'yes';
  age: string = 'senior';

  suggestedDogs;

  constructor(private svc: ConfigService) { }

  ngOnInit() {
  }

  submitSurvey() {
    
    var answers: string[];
    answers = [this.envir, this.size, this.energy, this.otherPets, this.timeAlone, this.spNeeds, this.hypoAll, this.age];
    
    this.svc.getDogFilter(answers).subscribe(data =>{

      console.log(data.json());
      this.svc.getUserDog().subscribe(data=>{
          console.log(data.json());
      });
    });
    
  }

}
