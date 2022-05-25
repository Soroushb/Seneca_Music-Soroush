import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { AboutComponent } from './about/about.component';
import { ArtistDiscographyComponent } from './artist-discography/artist-discography.component';
import { AlbumComponent } from './album/album.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { RegisterComponentComponent } from './register-component/register-component.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'newReleases', component: NewReleasesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'artist/:id', component: ArtistDiscographyComponent},
  {path: 'album/:id', component: AlbumComponent},
  {path: '', redirectTo: 'newReleases', pathMatch: 'full'},
  {path: 'search', component: SearchResultsComponent },
  {path: 'favourites', component: FavouritesComponent },
  {path: 'register',component: RegisterComponentComponent },
  {path: 'login',component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
