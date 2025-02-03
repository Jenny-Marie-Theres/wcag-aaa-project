import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VideoComponent} from "./video/video.component";
import {HomeComponent} from "./home/home.component";
import {SourcesComponent} from "./sources/sources.component";
import {EvaluationComponent} from "./evaluation/evaluation.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'video', component: VideoComponent },
  { path: 'evaluierung', component: EvaluationComponent},
  { path: 'quellen', component: SourcesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
