import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VideoComponent } from './video/video.component';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import {TextToSpeechComponent} from "./text-to-speech/text-to-speech.component";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import { SourcesComponent } from './sources/sources.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';
import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VideoComponent,
    HomeComponent,
    SidenavComponent,
    TextToSpeechComponent,
    SourcesComponent,
    VideoplayerComponent,
    ThemeSwitcherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
