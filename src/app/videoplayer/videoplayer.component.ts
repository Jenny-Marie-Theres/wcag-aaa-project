import { Component, AfterViewInit } from '@angular/core';

declare var YT: any; 

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements AfterViewInit {
  player: any; 
  captionsEnabled = true;

  ngAfterViewInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    const firstScriptTag = document.getElementsByTagName('script')[0];

    if (firstScriptTag && firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } else {
      console.error('Could not find a script tag or its parent node.');
    }

    (window as any)['onYouTubeIframeAPIReady'] = () => this.initializePlayer();
  }

  initializePlayer(): void {
    this.player = new YT.Player('video1');
  }

  pauseVideo(): void {
    if (this.player) {
      this.player.pauseVideo();
      console.log('Video paused');
    } else {
      console.error('YouTube player is not ready yet.');
    }
  }

  playVideo(): void {
    if (this.player) {
      this.player.playVideo();
      console.log('Video played');
    } else {
      console.error('YouTube player is not ready yet.');
    }
  }

}