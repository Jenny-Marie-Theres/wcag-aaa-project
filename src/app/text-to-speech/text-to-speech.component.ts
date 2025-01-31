import { Component } from '@angular/core';
import { TextToSpeechService } from './text-to-speech.service';

@Component({
  selector: 'app-text-to-speech',
  templateUrl: './text-to-speech.component.html',
  styleUrls: ['./text-to-speech.component.scss']
})
export class TextToSpeechComponent {
  isSpeedMenuOpen = false;
  selectedSpeed: number = 1;
  constructor(public ttsService: TextToSpeechService) {}

  play(): void {
    this.ttsService.play();
  }

  stop(): void {
    this.ttsService.stop();
  }
  toggleSpeedMenu(): void {
    this.isSpeedMenuOpen = !this.isSpeedMenuOpen;
  }

  // Setzt die Geschwindigkeit im Text-to-Speech-Service
  setSpeed(speed: number): void {
    this.selectedSpeed = speed;
    this.ttsService.setSpeed(speed);
    this.isSpeedMenuOpen = false;
    this.ttsService.stop();
    this.ttsService.play();
  }

  onToggleSpeedMenuKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleSpeedMenu();
    }
  }
}
