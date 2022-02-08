import { Component, Input } from "@angular/core";

@Component({
    selector: 'marketplace-row-card',
    templateUrl: 'item.row.component.html',
    styleUrls: ['item.row.component.css'] 
})

export class MarketplaceItemRowComponent {
    @Input()img: string;
    @Input()title: string;
    @Input()label: string;
    @Input()catN: string;
    @Input()mediaC: string;
    @Input()sleeveC: string;
    @Input()comment: string;
    @Input()username: string;
    @Input()country: string;
    @Input()ratingsN: number;
    @Input()shippingP: number;
    @Input()price: number;
    @Input()total: number;

    constructor(){
        this.img = ""
        this.title = "placeholder"
        this.label = "placeholder"
        this.catN = "placeholder"
        this.mediaC = "placeholder"
        this.sleeveC = "placeholder"
        this.comment = "placeholder"
        this.username = "placeholder"
        this.country = "placeholder"
        this.ratingsN = 10
        this.shippingP = 0
        this.price = 0
        this.total =this.price + this.shippingP
    }

}