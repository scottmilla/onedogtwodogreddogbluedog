import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from '../config-service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-dogregister',
  templateUrl: './dogregister.component.html',
  styleUrls: ['./dogregister.component.scss'],
  providers: [NgbModule, HttpClientModule]
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
    image: File = null;

    dogPostObj = {}; //will store JSON object that's returned from DB

  constructor(private config: ConfigService, private http: HttpClientModule) { }

  ngOnInit() {
  }

  submitDog() {

    this.attributes = {"environment": this.environment, "size": this.size, "energy": this.energy, "pets": this.pets, 
    "alone": this.alone, "needs": this.needs, "allergies": this.allergies, "age": this.age};

    var dogJSON = {"name": this.name,
    "environment": this.environment,
    "size": this.size,
    "energy": this.energy,
    "pets": this.pets,
    "alone": this.alone,
    "age": this.age,
    "needs": this.needs,
    "allergies": this.allergies,
    "breed": this.breed,
    "summary": this.summary,
    "location": this.location,
    "organization": this.organization,
    "email": this.email,
    };

    this.config.postDog(dogJSON).subscribe(data=>{
      console.log(data.json());
      
      // this.name = data.json().dog[0].name;
    });
  }

  onFileSelected(event){
    console.log(event);
    this.image = event.target.files[0];
  }


}
