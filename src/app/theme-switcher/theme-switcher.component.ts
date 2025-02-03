import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  
  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme') || 'default';
    this.applyTheme(savedTheme);
  }

  changeTheme(theme: string): void {
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
  }

  applyTheme(theme: string): void {
    document.body.classList.remove('default', 'protanopia', 'deuteranopia', 'tritanopia');
    if (theme !== 'default') {
      document.body.classList.add(theme);
    }
  }
}
