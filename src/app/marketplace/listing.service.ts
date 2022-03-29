
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MarketAlbumListModel } from "./listing.model";
@Injectable(
    {providedIn: 'root'}
)
export class ListingService {
    private baseUrl:string = "https://discogs-app-dffb9-default-rtdb.firebaseio.com/";
    private listingEndpoint:string = "listing";

    constructor(private db: AngularFireDatabase) {

    }

    getListings(){
        return this.db.list<MarketAlbumListModel>("listing").valueChanges();
    }

    getListing(index:number){
        return this.db.list<MarketAlbumListModel>("listing").valueChanges();
    }

    addProduct(product: MarketAlbumListModel){
        this.db.list<MarketAlbumListModel>("listing").push(product);
    }
}