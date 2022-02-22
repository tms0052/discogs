import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dsc-explore-cards',
  templateUrl: './explore-cards.component.html',
  styleUrls: ['./explore-cards.component.css']
})
export class ExploreCardsComponent {
  @Input() img: string;
  @Input() album: string;
  @Input() artist: string;

  constructor(){
      this.img = "";
      this.album = "missing";
      this.artist = "missing";
  }
}
