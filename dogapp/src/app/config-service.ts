import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, config } from 'rxjs';
import { RequestOptions } from '@angular/http';
import { Subscription } from 'rxjs';
import {MessengerService} from "../app/MessengerService"



@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    private messageSubscription: Subscription;
    private emailSubscription: Subscription;
    private dogSubscription: Subscription;
    private dogs;
    private tokenString;
    private email;

    constructor(private http: Http,private httpClient: HttpClient,private messengerService: MessengerService) { 
    }
    checkConfig = () =>{
      this.getData();
    }
    ngOnInit() {
      this.messageSubscription = this.messengerService.message.subscribe(m => {
        // Do something with your value
        this.tokenString=m;
      });
      this.emailSubscription = this.messengerService.email.subscribe(m => {
        // Do something with your value
        this.email=m;
      });
      this.dogSubscription = this.messengerService.dog.subscribe(m => {
        this.dogs=m;
      });
    }
    getData = () =>{
      this.messageSubscription = this.messengerService.message.subscribe(m => {
        this.tokenString=m;
      });
      this.emailSubscription = this.messengerService.email.subscribe(m => {
        this.email=m;
      });
      this.dogSubscription = this.messengerService.dog.subscribe(m => {
        this.dogs=m;
        console.log(this.dogs);
      });
    }
    getAllDogs = ():Observable<any> => {
      this.getData();
        // this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzA4NWYxNDMzYjJhMmExMzA5MWYzM2YiLCJmaXJzdE5hbWUiOiJKZW5ueSIsImxhc3ROYW1lIjoiVXJiYW4iLCJlbWFpbCI6Imdhcm9jb2xhMjJAeWFob28uY29tIiwicGhvbmUiOiI5MTczOTk4OTA3IiwiaWF0IjoxNTQ0MDUyNTAwLCJleHAiOjE1NDQwNjI1ODB9.cXuNTsczoiUvgq0_OLyfKlVCHYnBmIWbfcBlygZPTu8'
        const configUrl = "http://localhost:3000/api/dogs/allDogs";
        const h: Headers=new Headers();
        return this.http.get(configUrl,new RequestOptions({
            headers: new Headers({
              Authorization: `Bearer ${this.tokenString}`//called here
            }),
          }));
    }
    getAuth = ():Observable<any> =>{
      this.getData();
        console.log(this.tokenString);
        const configUrl = "http://localhost:3000/api/auth/authorize";
        return this.http.get(configUrl, new RequestOptions({
            headers: new Headers({
              Authorization: `Bearer ${this.tokenString}` //called here
            }),
          }))

    }
    setDogValue(value: string){
        this.getData();
        this.messengerService.setDog(value)
    }
    setGlobalValue(value: string, email: string) {
      this.getData();
      // All components that are subscribed to the
      // messenger service receive the update
      this.messengerService.setMessage(value);
      this.messengerService.setEmail(email);
    }
    getUserDog = ():Observable<any> => {
        this.getData();
        console.log(this.dogs);
        var numberDogs = [];
        
        var array = this.dogs.split(",");
        for (let i = 0; i<array.length;i++){
          console.log("AI: "+array[i])
          numberDogs.push(parseInt(array[i]))
          console.log(numberDogs[i])
        }
        console.log(numberDogs)
        console.log(array);
        var myJsonString = JSON.stringify(array);
        console.log(myJsonString)
        var finalArray = {"array": + array};
        console.log(finalArray)
        const configUrl = "http://localhost:3000/api/dogs/getUserDogs";
        // console.log(this.tokenString)
        return this.http.get(configUrl,new RequestOptions({
          headers: new Headers({
            Authorization: `Bearer ${this.tokenString}`//called here
          }),
        }));
    }
    login = (curremail,currpassword): Observable<any> =>{
      this.getData();
        // const obj = {'email': '"+email+"','password': "+password+"};
        let tmpEmail=curremail
        var myjson = {"email": curremail, "password": currpassword}
        const configUrl = "http://localhost:3000/api/auth/login/";
        const h: Headers=new Headers();
        var data = this.http.post(configUrl,myjson,{headers: h});
        console.log(data);
        this.http.post(configUrl,myjson,{headers: h}).subscribe(data=>{
          let token = data.json().token;
          console.log(token);
          let array = new Array(2);
          let counter = 0;
          let str = "";
          for (let i = 0;i<token.length;i++){
              if (token.charAt(i)==' '){
                array[counter]=str;
                counter+=1;
                str = "";
              }
              else if (i==token.length-1){
                str+=token.charAt(i);
                array[counter]=str;
                counter+=1;
              }
              else{
                // console.log(token.charAt(i));
                str+=token.charAt(i);
              }
          }
          this.setGlobalValue(array[1],curremail);
        });
        return data;
    }
    setToken = (token) =>{
      
    }
    registerUser = (j):Observable<any> => {
      this.getData();
        const configUrl = "http://localhost:3000/api/auth/register";
        const h: Headers=new Headers();
        return this.http.post(configUrl,j,{headers: h});
    }
    // setUserDog = (array):Observable<any> => {
    //   // var myJsonString = JSON.stringify(array);
    //   // console.log(myJsonString);
    //   var json = ('{"email": "'+this.email+'",')

    //   var finalObj = json+array+"}";
    //   console.log(finalObj)
    //   const configUrl = "http://localhost:3000/api/dogs/findDogList";
    //   const h: Headers=new Headers();
    //   return this.http.post(configUrl,json,{headers: h});
    // }
    getDogFilter = (ans):Observable<any> => {
      this.getData();
      console.log(ans);
        const configUrl = "http://localhost:3000/api/dogs/environment=" + ans[0] + "&size="
         + ans[1] + "&energy=" + ans[2] + "&pets=" + ans[3] + "&alone=" 
        + ans[4] + "&needs=" + ans[5] + "&allergies=" + ans[6] + "&age=" + ans[7];
        console.log(configUrl)
        const h: Headers=new Headers();
        this.http.get(configUrl, new RequestOptions({
          headers: new Headers({
            Authorization: `Bearer ${this.tokenString}` //called here
          }),
        })).subscribe(data =>{
          let str = data.json().dog.toString();
          console.log(str);
          this.setDogValue(str);
          //MOVE THIS TO getUserDog()
        })
        var data = this.http.get(configUrl, new RequestOptions({
          headers: new Headers({
            Authorization: `Bearer ${this.tokenString}` //called here
          }),
        }))
        return data;
        // console.log(testing);
        // return testing
    }
}

