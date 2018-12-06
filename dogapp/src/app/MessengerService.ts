import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class MessengerService {
    private dogSource: BehaviorSubject<string> = new BehaviorSubject('initialValue');
    private emailSource: BehaviorSubject<string> = new BehaviorSubject('initialValue'); 
    private messageSource: BehaviorSubject<string> = new BehaviorSubject('initialValue'); 
    public message = this.messageSource.asObservable();
    public email = this.emailSource.asObservable();
    public dog = this.dogSource.asObservable();

    public setMessage(value: string) {
        this.messageSource.next(value);
    }
    public setEmail(value: string){
        this.emailSource.next(value);
    }
    public setDog(value: string){
        this.dogSource.next(value);
    }
}