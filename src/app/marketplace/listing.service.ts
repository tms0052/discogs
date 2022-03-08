import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { MarketAlbumListModel } from "./listing.model";
@Injectable(
    {providedIn: 'root'}
)
export class ListingService {
    private baseUrl:string = "https://discogs-app-dffb9-default-rtdb.firebaseio.com/";
    private listingEndpoint:string = "listing";

    constructor(private http:HttpClient) {

    }

    getListings(){
        return this.http.get<MarketAlbumListModel []>(this.baseUrl + this.listingEndpoint+ '.json') ;
    }

    getListing(index:number){
        return this.http.get<MarketAlbumListModel>(this.baseUrl + this.listingEndpoint + '/' + index + '.json');
    }

}