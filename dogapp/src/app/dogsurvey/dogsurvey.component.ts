import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../config-service';
import { Router } from '@angular/router';
import { Config } from 'protractor';

@Component({
  selector: 'app-dogsurvey',
  templateUrl: './dogsurvey.component.html',
  styleUrls: ['./dogsurvey.component.scss'],
  providers: [NgbModule]
})
export class DogsurveyComponent implements OnInit {

  envir: string = 'NULL';
  size: string = 'NULL';
  energy: string = 'NULL';
  timeAlone: string = 'NULL';
  otherPets: string = 'NULL';
  hypoAll: string = 'NULL';
  spNeeds: string = 'NULL';
  age: string = 'NULL';

  suggestedDogs;

  constructor(private svc: ConfigService,private router: Router) { }

  ngOnInit() {
  }
  ageVal(val){
    console.log(val.srcElement.value);
    this.age = val.srcElement.value;
  }
  environment(val){
    console.log(val.srcElement.value);
    this.envir = val.srcElement.value;
  }
  sizeDeter(val){
    console.log(val.srcElement.value);
    this.size = val.srcElement.value;
  }
  alone(val){
    console.log(val.srcElement.value);
    this.timeAlone = val.srcElement.value;
  }
  pets(val){
    console.log(val.srcElement.value);
    this.otherPets = val.srcElement.value;
  }
  hypoAller(val){
    console.log(val.srcElement.value);
    this.hypoAll = val.srcElement.value;
  }
  specNeed(val){
    console.log(val.srcElement.value);
    this.spNeeds = val.srcElement.value;
  }
  
  submitSurvey() {
    var answers: string[];
    answers = [this.envir, this.size, this.energy, this.otherPets, this.timeAlone, this.spNeeds, this.hypoAll, this.age];
    console.log(answers);

    this.svc.getDogFilter(answers).subscribe(data =>{
      console.log(data.json());
      this.router.navigate(['/browse']);
      // this.svc.getUserDog().subscribe(data=>{
      //     console.log(data.json());
      // });
    });
    
  }

}
