import { Component, OnInit } from '@angular/core';
import { MarketAlbumListModel } from '../listing.model';
import { ListingService } from '../listing.service';

@Component({
  selector: 'dsc-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps:ListingService) { }

  ngOnInit(): void {
  }

  addProduct(product: MarketAlbumListModel){
    console.log("you clicked the button")
    console.log(product);
    this.ps.addProduct(product);

  }
}
