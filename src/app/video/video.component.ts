import {Component, OnInit} from '@angular/core';
import {LanguageToggleService} from "../language-toggle-service.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit{
  simpleLanguage: boolean = false;

  constructor(private languageToggleService: LanguageToggleService) {}

  ngOnInit(): void {

    this.languageToggleService.simpleLanguage$.subscribe(status => {
      this.simpleLanguage = status;
    });
  }


}
