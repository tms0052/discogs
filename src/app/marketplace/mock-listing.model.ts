export class MarketAlbumListModel{
    img: string;
    title: string;
    label: string;
    catN: string;
    mediaC: string;
    sleeveC: string;
    comment: string;
    username: string;
    country: string;
    ratingsN: number;
    shippingP: number;
    price: number;
    total: number;

    constructor(img: string, title: string,  label: string, catN: string,  mediaC: string,
        sleeveC: string, comment: string, username: string, country: string, ratingsN: number, shippingP: number,
        price: number, total: number){
        this.img = img;
        this.title = title
        this.label = label
        this.catN = catN
        this.mediaC = mediaC
        this.sleeveC = sleeveC
        this.comment = comment
        this.username = username
        this.country = country
        this.ratingsN = ratingsN
        this.shippingP = shippingP
        this.price = price
        this.total = total
    }
}