import {Component, OnInit} from '@angular/core';
import {LanguageToggleService} from "../language-toggle-service.service";

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.scss']
})
export class SourcesComponent implements OnInit{
  simpleLanguage: boolean = false;

  constructor(private languageToggleService: LanguageToggleService) {}

  ngOnInit(): void {

    this.languageToggleService.simpleLanguage$.subscribe(status => {
      this.simpleLanguage = status;
    });
  }

}
