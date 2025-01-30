import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) {}

  navigateToHome(): void {
    this.router.navigate(['']);
  }
  onKeyDown(event: KeyboardEvent) {

    if (event.key === 'Enter' || event.key === ' ') {
      this.navigateToHome();
    }
  }
}
