import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class MessengerService {

    private messageSource: BehaviorSubject<string> = new BehaviorSubject('initialValue'); 
    public message = this.messageSource.asObservable();

    public setMessage(value: string) {
        this.messageSource.next(value);
    }
}