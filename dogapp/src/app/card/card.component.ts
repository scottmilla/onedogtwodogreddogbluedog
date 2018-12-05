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
    
  }

}
