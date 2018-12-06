import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config-service';


@Component({
  selector: 'app-browsepage',
  templateUrl: './browsepage.component.html',
  styleUrls: ['./browsepage.component.scss']
})
export class BrowsepageComponent implements OnInit {
  App = (name,breed,summary,size,needs,allergies,age,id,imageLink) => {
    return (
      '<div class="dog-card"> '+  
        '<div class="box-part text-center"> '+
          '<img class="dogimg" src="'+imageLink+'" alt="Coco!!"> '+
          '<div class="title"> '+
            '<h4>'+name+'</h4> '+
          '</div> '+
          '<div class="text"> '+
            '<div> '+
              '<span><b>Breed:</b>'+breed+'<br>'+
                '<b>Summary:</b> '+summary+'</span> '+
            '</div> '+
          '</div> '+
          '<a href="#'+id+'" data-toggle="collapse">Learn More</a> '+
          '<div class="collapse" id='+id+'> '+
            '<span> '+
              '<b>Size:</b> '+size+'<br> '+
              '<b>Special Needs:</b> '+needs+'<br> '+
              '<b>Hypoallergenic?:</b> '+allergies+'<br> '+
              '<b>Age:</b> '+age+''+
            '</span> '+
          '</div> '+
        '</div> '+
      '</div> '

    )
  }
  constructor(private svc:ConfigService){}

  ngOnInit() {
    this.svc.getAuth().subscribe(data =>{
      console.log("in here");
    })
    this.svc.getAllDogs().subscribe(data=>{
      console.log(data.json().dog)
      var i = 0;
      for (i = 1;i<10;i++){
        if (i<data.json().dog.length+1){
          var name = data.json().dog[i-1].name;
          var breed = data.json().dog[i-1].breed;
          var summary = data.json().dog[i-1].summary;
          var size = data.json().dog[i-1].attributes.size;
          var needs = data.json().dog[i-1].attributes.needs;
          var allergies = data.json().dog[i-1].attributes.allergies;
          var age = data.json().dog[i-1].attributes.age;
          var id = data.json().dog[i-1]._id;
          var imageLink = "https://i.groupme.com/906x1207.jpeg.2ffb71f2feab4c60bf43cc925981072a.large";
          console.log(name);
          console.log(id);
          document.getElementById('div'+i).innerHTML = this.App(name,breed,summary,size,needs,allergies,age,"dog"+i,imageLink);
          // console.log(i);
        }
      }
      // this.name = data.json().dog[0].name;
    });
  }

}
