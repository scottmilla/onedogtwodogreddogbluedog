import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss'],
  providers: [NgbModule]
})
export class NavigationbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
