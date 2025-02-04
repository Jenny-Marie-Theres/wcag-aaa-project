import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {LanguageToggleService} from "../language-toggle-service.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isSimpleLanguage: boolean = false;
  constructor(private router: Router, private languageToggleService: LanguageToggleService) {}


  navigateToHome(): void {
    this.router.navigate(['']);
  }

  toggleSimpleLanguage() {
    this.languageToggleService.toggleSimpleLanguage();
    this.isSimpleLanguage = !this.isSimpleLanguage;
  }
  onKeyDown(event: KeyboardEvent) {

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.navigateToHome();
    }
  }

  onKeyDownLanguage(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.toggleSimpleLanguage();
    }
  }
  showAccessibilityOptions = false;

  toggleAccessibilityOptions(): void {
    this.showAccessibilityOptions = !this.showAccessibilityOptions;
  }


}
