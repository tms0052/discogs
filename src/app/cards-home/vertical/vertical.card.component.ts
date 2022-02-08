import { Component, Input } from "@angular/core";

@Component({
    selector: 'dsc-vertical-card',
    templateUrl: 'vertical.card.component.html',
    styleUrls: ['vertical.card.component.css'] 
})

export class VerticalCardComponent {
    @Input() img: string;
    @Input() album: string;
    @Input() artist: string;

    constructor(){
        this.img = "";
        this.album = "missing";
        this.artist = "missing";
    }
}