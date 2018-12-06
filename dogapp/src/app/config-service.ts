import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
    
    constructor(private http: Http) { }
    
    getAllDogs = ():Observable<any> => {
        const configUrl = "http://localhost:3000/api/dogs/allDogs";
        const h: Headers=new Headers();
        return this.http.get(configUrl,{headers: h});
    }
    registerUser = ():Observable<any> => {
        const configUrl = "http://localhost:3000/api/auth/register";
        const h: Headers=new Headers();
        return this.http.get(configUrl,{headers: h});

    }
    getDogFilter = (ans):Observable<any> => {
        const configUrl = "http://localhost:3000/api/dogs/environment=:" + ans[0] + 
        "&size=:" + ans[1] + "&energy=:" + ans[2] + "&pets=:" + ans[3] + "&alone=:" 
        + ans[4] + "&needs=:" + ans[5] + "&allergies=:" + ans[6];
        const h: Headers=new Headers();
        return this.http.get(configUrl,{headers: h});
    }
}

