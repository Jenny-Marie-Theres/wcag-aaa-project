import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {
  private synth = window.speechSynthesis;
  private utterance = new SpeechSynthesisUtterance();
  isSpeaking = false;

  constructor() {
    this.utterance.lang = 'de-DE';
    this.utterance.rate = 1;
    this.utterance.pitch = 1;
  }

  /**
   * Startet das Vorlesen
   */
  play(): void {
    if (!this.isSpeaking) {
      this.utterance.text = this.getVisibleText();
      this.synth.speak(this.utterance);
      this.isSpeaking = true;
    }
  }

  /**
   * Stoppt das Vorlesen
   */
  stop(): void {
    this.synth.cancel();
    this.isSpeaking = false;
  }
  setSpeed(speed: number): void {
    this.utterance.rate = speed;
  }
  /**
   * Holt den sichtbaren Text aus der Navigation und dem Hauptinhalt
   */
  private getVisibleText(): string {
    let text = '';

    // Navigation einlesen
    const nav = document.querySelector('app-navbar');
    if (nav) {
      text += 'Navigation: ' + this.getTextWithHeadings(nav) + '\n';
    }

    // Seiten-Navigation einlesen
    const sidenav = document.querySelector('mat-sidenav');
    if (sidenav) {
      text += 'Seiten Navigation: ' + this.getTextWithHeadings(sidenav) + '\n';
    }


    const main = document.querySelector('main');
    if (main) {
      text += 'Hauptinhalt: ' + this.getTextWithHeadings(main);
    }

    return text;
  }

  /**
   * Liest den Text mit den Überschriften korrekt aus
   */
  private getTextWithHeadings(element: Element): string {
    let result = '';

    element.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, a').forEach(el => {
      if (el.tagName.startsWith('H')) {
        result += `Überschrift ${el.tagName.substring(1)}: ${el.textContent}\n`;
      } else {
        result += `${el.textContent}\n`;
      }
    });

    return result;
  }
}
