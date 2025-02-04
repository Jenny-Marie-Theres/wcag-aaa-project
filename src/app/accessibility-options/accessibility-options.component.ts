import { Component } from '@angular/core';

@Component({
  selector: 'app-accessibility-options',
  templateUrl: './accessibility-options.component.html',
  styleUrls: ['./accessibility-options.component.scss']
})
export class AccessibilityOptionsComponent {
  // Initialwerte
  lineHeight = 1.5;   // Standard-Zeilenabstand
  letterSpacing = 0;  // Standard-Buchstabenabstand
  wordSpacing = 0;    // Standard-Wortabstand
  fontSize = 16;      // Standard-Schriftgröße

  // Textabstände aktualisieren
  updateTextSpacing(): void {
    document.documentElement.style.setProperty('--line-height', this.lineHeight.toString());
    document.documentElement.style.setProperty('--letter-spacing', `${this.letterSpacing}em`);
    document.documentElement.style.setProperty('--word-spacing', `${this.wordSpacing}em`);
  }

  // Schriftgröße aktualisieren
  updateFontSize(): void {
    document.documentElement.style.setProperty('--font-size', `${this.fontSize}px`);
  }

  // 200% Schriftgröße umschalten
  toggleLargeText(): void {
    const isLarge = document.body.classList.toggle('large-text');
    this.fontSize = isLarge ? 32 : 16; // Synchronisiere den Slider
    this.updateFontSize();
  }
}