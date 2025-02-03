import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageToggleService {

  private simpleLanguageSubject = new BehaviorSubject<boolean>(false);


  simpleLanguage$ = this.simpleLanguageSubject.asObservable();


  toggleSimpleLanguage() {
    this.simpleLanguageSubject.next(!this.simpleLanguageSubject.value);
  }


  getSimpleLanguageStatus(): boolean {
    return this.simpleLanguageSubject.value;
  }
}
