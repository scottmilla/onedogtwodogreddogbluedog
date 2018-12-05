import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config-service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(private svc:ConfigService){}
  ngOnInit() {
    this.svc.getAllDogs().subscribe(data=>{
      console.log(data.json().dog[0].name)
      document.getElementById('name').innerHTML = data.json().dog[0].name
    });
  }

}
