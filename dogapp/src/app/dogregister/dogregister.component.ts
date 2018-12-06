import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../config-service';

@Component({
  selector: 'app-dogregister',
  templateUrl: './dogregister.component.html',
  styleUrls: ['./dogregister.component.scss'],
  providers: [NgbModule]
})
export class DogregisterComponent implements OnInit {

    name: string = '';
    attributes: {};
    breed: string = '';
    summary: string = '';
    location: Number;
    environment: string = '';
    size: string = '';
    energy: string = '';
    pets: string = '';
    alone: string = '';
    needs: string = '';
    allergies: string = '';
    age: string = '';
    organization: string = '';
    email: string = '';

    dogPostObj = {}; //will store JSON object that's returned from DB

  constructor(private config: ConfigService) { }

  ngOnInit() {
  }

  submitSurvey() {

    this.attributes = {"environment": this.environment, "size": this.size, "energy": this.energy, "pets": this.pets, 
    "alone": this.alone, "needs": this.needs, "allergies": this.allergies, "age": this.age};

    var dogJSON = {"name": this.name, "attributes": this.attributes, "breed": this.breed, "summary": this.summary, 
    "location": this.location, "organization": this.organization, "email": this.email};

    //this.dogPostObj = this.config.postDog(dogJSON);
    //console.log(this.dogPostObj);
  }

}
