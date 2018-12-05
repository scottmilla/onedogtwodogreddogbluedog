import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config-service';


@Component({
  selector: 'app-browsepage',
  templateUrl: './browsepage.component.html',
  styleUrls: ['./browsepage.component.scss']
})
export class BrowsepageComponent implements OnInit {
  App = () => {
    return (
      '<div class="dog-card"> '+  
        '<div class="box-part text-center"> '+
          '<img class="dogimg" src="https://i.groupme.com/906x1207.jpeg.2ffb71f2feab4c60bf43cc925981072a.large" alt="Coco!!"> '+
          '<div class="title"> '+
            '<h4>Coco Butler</h4> '+
          '</div> '+
          '<div class="text"> '+
            '<div> '+
              '<span><b>Breed:</b> Mutt (probably Long Haired Retriever and Border Collie)<br> '+
                '<b>Summary:</b> Lazy piece of shit, but the most lovable dog to live on this earth</span> '+
            '</div> '+
          '</div> '+
          '<a href="#cocotest" data-toggle="collapse">Learn More</a> '+
          '<div class="collapse" id="cocotest"> '+
            '<span> '+
              '<b>Size:</b> medium<br> '+
              '<b>Special Needs:</b> none<br> '+
              '<b>Hypoallergenic?:</b> no<br> '+
              '<b>Age:</b> 12 years'+
            '</span> '+
          '</div> '+
        '</div> '+
      '</div> '

    )
  }
  constructor(private svc:ConfigService){
  }

  ngOnInit() {
    this.svc.getAllDogs().subscribe(data=>{
      console.log(data.json().dog[0].name)
      var i = 0;
      for (i = 1;i<10;i++){
        document.getElementById('div'+i).innerHTML = this.App();
        console.log(i);
      }
      // this.name = data.json().dog[0].name;
    });
  }

}
