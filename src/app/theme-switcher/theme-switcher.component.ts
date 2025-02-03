import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})
export class ThemeSwitcherComponent implements OnInit {
  ngOnInit(): void {
    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'default';
    this.applyTheme(savedTheme);

    // Set the selected option in the dropdown
    const selectElement = document.getElementById('theme-select') as HTMLSelectElement;
    if (selectElement) {
      selectElement.value = savedTheme;
    }
  }

  changeTheme(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const theme = selectElement.value;

    // Save the selected theme to localStorage
    localStorage.setItem('theme', theme);

    // Apply the selected theme
    this.applyTheme(theme);
  }

  applyTheme(theme: string): void {
    // Remove all existing theme classes
    document.body.classList.remove('default', 'protanopia', 'deuteranopia', 'tritanopia');

    // Apply the selected theme
    if (theme !== 'default') {
      document.body.classList.add(theme);
    }
  }
}