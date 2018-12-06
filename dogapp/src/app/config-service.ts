import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, config } from 'rxjs';
import { RequestOptions } from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class ConfigService {

    constructor(private http: Http,private httpClient: HttpClient) { 
    }
    token = 'hey there its me ya boi'
    
    getAllDogs = ():Observable<any> => {
        this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzA4NWYxNDMzYjJhMmExMzA5MWYzM2YiLCJmaXJzdE5hbWUiOiJKZW5ueSIsImxhc3ROYW1lIjoiVXJiYW4iLCJlbWFpbCI6Imdhcm9jb2xhMjJAeWFob28uY29tIiwicGhvbmUiOiI5MTczOTk4OTA3IiwiaWF0IjoxNTQ0MDUyNTAwLCJleHAiOjE1NDQwNjI1ODB9.cXuNTsczoiUvgq0_OLyfKlVCHYnBmIWbfcBlygZPTu8'
        const configUrl = "http://localhost:3000/api/dogs/allDogs";
        const h: Headers=new Headers();
        return this.http.get(configUrl,new RequestOptions({
            headers: new Headers({
              Authorization: `Bearer ${this.token}`
            }),
          }));
    }
    getAuth = ():Observable<any> =>{
        this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzA4NWYxNDMzYjJhMmExMzA5MWYzM2YiLCJmaXJzdE5hbWUiOiJKZW5ueSIsImxhc3ROYW1lIjoiVXJiYW4iLCJlbWFpbCI6Imdhcm9jb2xhMjJAeWFob28uY29tIiwicGhvbmUiOiI5MTczOTk4OTA3IiwiaWF0IjoxNTQ0MDUyNTAwLCJleHAiOjE1NDQwNjI1ODB9.cXuNTsczoiUvgq0_OLyfKlVCHYnBmIWbfcBlygZPTu8'
        const configUrl = "http://localhost:3000/api/auth/authorize";
        return this.http.get(configUrl, new RequestOptions({
            headers: new Headers({
              Authorization: `Bearer ${this.token}`
            }),
          }))

    }
    login = (curremail,currpassword): Observable<any> =>{
        // const obj = {'email': '"+email+"','password': "+password+"};
        var myjson = {"email": curremail, "password": currpassword}
        const configUrl = "http://localhost:3000/api/auth/login/";
        const h: Headers=new Headers();
        return this.http.post(configUrl,myjson,{headers: h});
    }
    registerUser = (j):Observable<any> => {
        const configUrl = "http://localhost:3000/api/auth/register";
        const h: Headers=new Headers();
        return this.http.post(configUrl,j,{headers: h});

    }
    getDogFilter = (ans):Observable<any> => {
        const configUrl = "http://localhost:3000/api/dogs/environment=:" + ans[0] + 
        "&size=:" + ans[1] + "&energy=:" + ans[2] + "&pets=:" + ans[3] + "&alone=:" 
        + ans[4] + "&needs=:" + ans[5] + "&allergies=:" + ans[6] + "&age=:" + ans[7];
        const h: Headers=new Headers();
        return this.http.get(configUrl,new RequestOptions({
            headers: new Headers({
              Authorization: `Bearer ${this.token}`
            }),
          }));
    }
    postDog = (dogObj): Observable<any> =>{
        const configUrl = "http://localhost:3000/api/dogs";
        const h: Headers=new Headers();
        return this.http.post(configUrl,dogObj,{headers: h});
    }
}

