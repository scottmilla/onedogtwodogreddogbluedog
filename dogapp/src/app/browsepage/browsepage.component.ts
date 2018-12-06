import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config-service';


@Component({
  selector: 'app-browsepage',
  templateUrl: './browsepage.component.html',
  styleUrls: ['./browsepage.component.scss']
})
export class BrowsepageComponent implements OnInit {
  dogs = ["https://i.groupme.com/244x206.jpeg.0f1b1bc4a1f545f0be2b9b1d97147629.large","https://i.groupme.com/906x1207.jpeg.2ffb71f2feab4c60bf43cc925981072a.large","https://i.groupme.com/1900x1266.jpeg.30b8af5bca784189876e962345e1c678.large",
  "https://i.groupme.com/1910x1000.jpeg.de34b8de3fb5444ab0a43d9c0b36bd49.large","https://i.groupme.com/1280x853.jpeg.e8a8eb9de7ad4c53af56f6c6f247dea3.large","https://i.groupme.com/768x1024.jpeg.0611b13158a04d90a42a1f9631520bf0.large",
  "https://i.groupme.com/480x480.jpeg.df2ab79e511a4bb9aea224271ba8438b.large","https://i.groupme.com/225x225.jpeg.564847933ba24fd3966316f096274b67.large","https://i.groupme.com/275x183.jpeg.96e935afb75640e5946e7567d65a6ece.large"
,"https://i.groupme.com/194x259.jpeg.5ccb89007ec549b69ab33b39c2ae21e0.large"]
  App = (name,breed,summary,size,needs,allergies,age,id,imageLink) => {
    return (
      '<div class="dog-card"> '+  
        '<div class="box-part text-center"> '+
          '<img class="dogimg" src="'+imageLink+'" alt="Coco!!"> '+
          '<div class="title"> '+
            '<h4>'+name+'</h4> '+
          '</div> '+
          '<div class="text"> '+
            '<div style="height: 75px"> '+
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
    // this.svc.getAuth().subscribe(data =>{
    //   console.log("in here");
    // })
    this.svc.getUserDog().subscribe(data=>{
      console.log(data.json().length)
      var i = 0;
      for (i = 1;i<10;i++){
        if (i<data.json().length+1){
          var name = data.json()[i-1].name;
          var breed = data.json()[i-1].breed;
          var summary = data.json()[i-1].summary;
          var size = data.json()[i-1].attributes.size;
          var needs = data.json()[i-1].attributes.needs;
          var allergies = data.json()[i-1].attributes.allergies;
          var age = data.json()[i-1].attributes.age;
          var id = data.json()[i-1]._id;
          // var random = Math.floor((Math.random() * 8));
          var imageLink = this.dogs[i];
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
