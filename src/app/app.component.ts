import { Component } from '@angular/core';
import { AlbumListModel } from './cards-home/vertical/album-list.model';
import { mock_album_list } from './cards-home/vertical/mock_album_list';
import { MarketAlbumListModel } from './marketplace/mock-listing.model';
import { mock_listing_list } from './marketplace/mock_listing_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'discogs';
  

}
