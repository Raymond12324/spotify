import { Component, ElementRef, ViewChild } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {

  mockCover: TrackModel = {
    name: 'Mock Title',
    album: 'Mock album',
    cover: 'https://picsum.photos/200/300',
    _id: 1,
    artist: {name: 'Mock Artist',  nickname:'Mock Nickname', nationality: 'Prubea'},
    duration: 100,
    url: ''
  };


  
  
 
}
