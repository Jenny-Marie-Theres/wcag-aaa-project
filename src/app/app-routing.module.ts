import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {VideoComponent} from "./video/video.component";
import {HomeComponent} from "./home/home.component";
import {SourcesComponent} from "./sources/sources.component";
import {VideoplayerComponent} from './videoplayer/videoplayer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'video', component: VideoComponent },
  { path: 'videoplayer', component: VideoplayerComponent},
  { path: 'quellen', component: SourcesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
