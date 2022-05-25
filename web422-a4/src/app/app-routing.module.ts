import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { AboutComponent } from './about/about.component';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {path: 'newReleases', component: NewReleasesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'artist', component: ArtistDiscographyComponent},
  {path: 'album', component: AlbumComponent},
  {path: '', redirectTo: 'newReleases', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
