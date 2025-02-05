import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {
  private synth = window.speechSynthesis;
  private utterance = new SpeechSynthesisUtterance();
  isSpeaking = false;
  private currentIndex = 0;
  private textQueue: string[] = [];

  constructor() {
    this.utterance.lang = 'de-DE';
    this.utterance.rate = 1;
    this.utterance.pitch = 1;

    this.utterance.onend = () => {
      this.isSpeaking = false;
      this.playNext();
    };
  }

  /**
   * Startet das Vorlesen
   */
  play(): void {
    if (!this.isSpeaking) {
      const text = this.getVisibleText();
      this.textQueue = text.split('\n').filter(line => line.trim() !== '');
      this.currentIndex = 0;
      this.playNext();
    }
  }

  /**
   * Liest den nächsten Textabschnitt vor
   */
  private playNext(): void {
    if (this.currentIndex < this.textQueue.length) {
      this.utterance.text = this.textQueue[this.currentIndex];
      this.synth.speak(this.utterance);
      this.isSpeaking = true;
      this.currentIndex++;
    }
  }

  /**
   * Stoppt das Vorlesen
   */
  stop(): void {
    this.synth.cancel();
    this.isSpeaking = false;
  }

  /**
   * Pausiert das Vorlesen
   */
  pause(): void {
    if (this.isSpeaking) {
      this.synth.pause();
    }
  }

  /**
   * Setzt das Vorlesen fort
   */
  resume(): void {
    if (this.synth.paused) {
      this.synth.resume();
    }
  }

  /**
   * Setzt die Vorlesegeschwindigkeit
   */
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

    // Hauptinhalt einlesen
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

    // Erweitere die Auswahl, um Tabellenstrukturen zu erfassen
    element.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, a, button, [role="button"], table, th, td').forEach(el => {
      const tagName = el.tagName.toLowerCase();
      const ariaLabel = el.getAttribute('aria-label') || el.textContent?.trim();

      if (tagName.startsWith('h')) {
        result += `Überschrift ${tagName.substring(1)}: ${el.textContent?.trim()}\n`;
      } else if (tagName === 'a') {
        result += `Link: ${el.textContent?.trim()}\n`;
      } else if (tagName === 'button' || el.getAttribute('role') === 'button') {
        result += `Schaltfläche: ${ariaLabel}\n`;
      } else if (tagName === 'th') {
        result += `Spaltenüberschrift: ${el.textContent?.trim()}\n`;
      } else if (tagName === 'td') {
        result += `Zelleninhalt: ${el.textContent?.trim()}\n`;
      } else {
        result += `${el.textContent?.trim()}\n`;
      }
    });

    return result;
  }

}
