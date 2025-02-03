import {Component, OnInit} from '@angular/core';
import {LanguageToggleService} from "../language-toggle-service.service";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  simpleLanguage: boolean = false;

  constructor(private languageToggleService: LanguageToggleService) {}

  ngOnInit(): void {

    this.languageToggleService.simpleLanguage$.subscribe(status => {
      this.simpleLanguage = status;
    });
  }

}
