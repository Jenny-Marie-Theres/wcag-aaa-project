import {Component, OnInit} from '@angular/core';
import {LanguageToggleService} from "../language-toggle-service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  simpleLanguage: boolean = false;

  constructor(private languageToggleService: LanguageToggleService) {}

  ngOnInit(): void {

    this.languageToggleService.simpleLanguage$.subscribe(status => {
      this.simpleLanguage = status;
    });
  }
}
