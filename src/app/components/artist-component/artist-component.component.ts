import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist-component',
  templateUrl: './artist-component.component.html',
  styleUrls: ['./artist-component.component.css']
})

export class ArtistComponentComponent implements OnInit {

  public idArtist:string="";
  public toptracks:any="";
  public artist:any="";

  constructor(private _spotifyService:SpotifyService, private activatedRoute:ActivatedRoute) { 

   this.idArtist= this.activatedRoute.snapshot.paramMap.get('id')

    this._spotifyService.getTopTrackArtist(this.idArtist).subscribe((data:any)=>{

      this.toptracks=data.tracks;

      console.log(this.toptracks);

      this._spotifyService.getArtist(this.idArtist).subscribe((datadeelartista)=>{

        this.artist=datadeelartista;

        console.log(this.artist)

      })
      
    })
  }

  ngOnInit() {
  }

}
