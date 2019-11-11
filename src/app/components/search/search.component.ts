import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import{debounceTime, debounce}from'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public searchFilter:Array<string>=['track','artist']

  public searchResults:any=[];

  constructor(private _spotifyService:SpotifyService, private router:Router) { }

  ngOnInit() {
  }

  search(filter,termino){
    

    if(filter=='null'|| termino==""||termino==" ")return

    this. _spotifyService.searchdata(termino,filter).pipe(debounceTime(2000)
    ).subscribe((data:any)=>{

      if(data.tracks){
        this.searchResults=data.tracks.items

      }else{
        this.searchResults=data.artists.items
      }
    })

      // this.searchResults=data;
    

    

    
    
    
  }

 public GotoArtist(artistId){

  this.router.navigate(['/artist',artistId])

  console.log(artistId);
  

  }


  
}
