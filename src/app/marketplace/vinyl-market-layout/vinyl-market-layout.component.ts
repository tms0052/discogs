import { Component} from "@angular/core";
import { MarketAlbumListModel } from "../mock-listing.model";
import { mock_listing_list } from "../mock_listing_list";

@Component({
    selector: 'dsc-vinyl-market',
    templateUrl: 'vinyl-market-layout.component.html',
    styleUrls: ['vinyl-market-layout.component.css']

})

export class VinylMarketLayoutComponent{
    
    marketAlbums: MarketAlbumListModel [] = [];
  
    constructor(){
      //put some code to fetch data from backend
  
      
  
      for(var marketAlbum of mock_listing_list){
        console.log(marketAlbum)
        this.marketAlbums.push(marketAlbum)
      }
    }

}