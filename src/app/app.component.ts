import { Component } from '@angular/core';
import { AlbumListModel } from './cards-home/vertical/album-list.model';
import { mock_album_list } from './cards-home/vertical/mock_album_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'discogs';
  albums: AlbumListModel [] = [];

  constructor(){
    //put some code to fetch data from backend

    for (var album of mock_album_list){
      console.log(album);
      this.albums.push(album);
    }
  }

}
