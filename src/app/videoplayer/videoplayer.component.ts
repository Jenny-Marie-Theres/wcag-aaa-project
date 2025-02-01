import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

declare var YT: any;

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements OnInit, AfterViewInit {
  @ViewChild('youtubePlayer') youtubePlayer!: ElementRef; 
  player: any; 
  safeVideoUrl: SafeResourceUrl = ""; 
  captionsEnabled = false; 
  playerState = 'Paused'; 


  videoUrl = 'https://www.youtube.com/embed/68h6bq1aYZo'; 

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {

    this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }

  ngAfterViewInit(): void {

    this.player = new YT.Player(this.youtubePlayer.nativeElement, {
      events: {
        'onReady': this.onPlayerReady.bind(this),
        'onStateChange': this.onPlayerStateChange.bind(this)
      }
    });
  }


  onPlayerReady(event: any): void {
    console.log('Player is ready');
  }

  onPlayerStateChange(event: any): void {
    switch (event.data) {
      case YT.PlayerState.PLAYING:
        this.playerState = 'Playing';
        break;
      case YT.PlayerState.PAUSED:
        this.playerState = 'Paused';
        break;
      case YT.PlayerState.ENDED:
        this.playerState = 'Ended';
        break;
    }
  }

  playVideo(): void {
    this.player.playVideo();
    this.playerState = 'Playing';
  }

  pauseVideo(): void {
    this.player.pauseVideo();
    this.playerState = 'Paused';
  }

  toggleCaptions(): void {
    this.captionsEnabled = !this.captionsEnabled;
    if (this.captionsEnabled) {
      this.player.setOption('captions', 'on', 0);
    } else {
      this.player.setOption('captions', 'off', 0);
    }
  }
}