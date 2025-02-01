import { Component, AfterViewInit, OnDestroy } from '@angular/core';

declare var YT: any;

@Component({
  selector: 'app-videoplayer',
  templateUrl: './videoplayer.component.html',
  styleUrls: ['./videoplayer.component.scss']
})
export class VideoplayerComponent implements AfterViewInit, OnDestroy {
  player: any;
  captionsEnabled = true;
  private isYouTubeAPIReady = false;

  ngAfterViewInit(): void {
    if ((window as any)['YT'] && (window as any)['YT'].Player) {
      this.isYouTubeAPIReady = true;
      this.initializePlayer();
    } else {
      this.loadYouTubeAPI();
    }
  }

  loadYouTubeAPI(): void {
    if (!(window as any)['onYouTubeIframeAPIReady']) {
      (window as any)['onYouTubeIframeAPIReady'] = () => {
        this.isYouTubeAPIReady = true;
        this.initializePlayer();
      };

      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      
      if (firstScriptTag && firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      } else {
        console.error('Could not find a script tag or its parent node.');
      }
    }
  }

  initializePlayer(): void {
    if (this.isYouTubeAPIReady) {
      console.log("Initializing YouTube Player");
      this.player = new YT.Player('video1', {
        events: {
          onReady: (event: any) => {
            console.log('YouTube Player ready');
          },
          onError: (error: any) => {
            console.error('YouTube Player error:', error);
          }
        }
      });
    } else {
      console.error('YouTube API is not ready yet.');
    }
  }

  pauseVideo(): void {
    if (this.player && this.player.pauseVideo) {
      this.player.pauseVideo();
      console.log('Video paused');
    } else {
      console.error('YouTube player is not ready yet.');
    }
  }

  playVideo(): void {
    if (this.player && this.player.playVideo) {
      this.player.playVideo();
      console.log('Video played');
    } else {
      console.error('YouTube player is not ready yet.');
    }
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.destroy();
      this.player = null;
      console.log('YouTube Player destroyed');
    }
  }
}
