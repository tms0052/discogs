import { Component, OnInit} from "@angular/core";
import { MarketAlbumListModel } from "../listing.model";
import { ListingService } from "../listing.service";
import { mock_listing_list } from "../mock_listing_list";

@Component({
    selector: 'dsc-vinyl-market',
    templateUrl: 'vinyl-market-layout.component.html',
    styleUrls: ['vinyl-market-layout.component.css']

})

export class VinylMarketLayoutComponent implements OnInit{
    
    marketAlbums: MarketAlbumListModel [] = [];
  
    constructor(private listingService:ListingService){
    
    }
  ngOnInit(): void {
    this.listingService.getListings().subscribe((data: MarketAlbumListModel []) => {
      console.log("fetching");
      for( var listing of data){
        console.log(listing);
        this.marketAlbums.push(listing);
      }
    });
  }

}