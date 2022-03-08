import { Component} from "@angular/core";
import { AlbumListModel } from "src/app/cards-home/vertical/album-list.model";
import { mock_album_list } from "src/app/cards-home/vertical/mock_album_list";
import { MarketAlbumListModel } from "src/app/marketplace/listing.model";
import { mock_listing_list } from "src/app/marketplace/mock_listing_list";

@Component({
    selector: 'dsc-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})

export class HomeLayoutComponent{
    albums: AlbumListModel [] = [];
    marketAlbums: MarketAlbumListModel [] = [];
  
    constructor(){
      //put some code to fetch data from backend
  
      for (var album of mock_album_list){
        console.log(album);
        this.albums.push(album);
      }
  
      for(var marketAlbum of mock_listing_list){
        console.log(marketAlbum)
        this.marketAlbums.push(marketAlbum)
      }
    }
}