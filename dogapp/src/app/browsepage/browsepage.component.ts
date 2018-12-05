import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config-service';


@Component({
  selector: 'app-browsepage',
  templateUrl: './browsepage.component.html',
  styleUrls: ['./browsepage.component.scss']
})
export class BrowsepageComponent implements OnInit {
  constructor(private svc:ConfigService){
  }

  ngOnInit() {
    this.svc.getAllDogs().subscribe(data=>{
      console.log(data.json().dog[0].name)
      // document.getElementById('ac1').innerHTML = data.json().dog[0].name
      // this.name = data.json().dog[0].name;
    });
  }

}
