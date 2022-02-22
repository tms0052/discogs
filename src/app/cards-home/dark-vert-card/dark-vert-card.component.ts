import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dsc-dark-vert-card',
  templateUrl: './dark-vert-card.component.html',
  styleUrls: ['./dark-vert-card.component.css']
})
export class DarkVertCardComponent{
  @Input() img: string;
  @Input() album: string;
  @Input() artist: string;
  @Input() title: string;


  constructor(){
      this.img = "";
      this.album = "missing";
      this.artist = "missing";
      this.title = "missing"
  }
}
