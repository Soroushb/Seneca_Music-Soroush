import { Component, OnInit } from '@angular/core';
// import * as albumData from '../data/SearchResultsAlbums.json';
// import * as artistData from '../music-data.service';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from '../music-data.service';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit {

  public albums: any[];
  public artist: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: MusicDataService
  ) { 

  }

  ngOnInit(): void {

    let id = this.route.snapshot.params['id'];

    this.dataService.getArtistById(id).subscribe((data) => {
      this.artist = data;
    });
    this.dataService.getAlbumsByArtistId(id).subscribe((data) => {
      const found = new Set();
      let unique = data.items;
      
      this.albums = unique.filter((album: { name: unknown }) => {
        const duplicate = found.has(album.name);
        found.add(album.name);
        return !duplicate;
      });

      console.log(this.albums);
    });
  }
  }