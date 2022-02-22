import { Component } from '@angular/core';
import { ExploreListModel } from '../explore-cards/explore-list.model';
import { mock_explore_list } from '../explore-cards/mock_explore_list';

@Component({
  selector: 'dsc-explore-all-layout',
  templateUrl: './explore-all-layout.component.html',
  styleUrls: ['./explore-all-layout.component.css']
})
export class ExploreAllLayoutComponent{

  albums: ExploreListModel [] = [];

  constructor(){
    //put some code to fetch data from backend

    for (var album of mock_explore_list){
      console.log(album);
      this.albums.push(album);
    }
  }
}
