import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { UserInfo } from './user-info.model';

@Injectable()
@Component({
  selector: 'dsc-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit{

  myInfo: UserInfo | undefined;

  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
      console.log("sending get request");
      this.getUserInfo();
      console.log("registering showUserInfo as a subscriber");
      this.showUserInfo();
  }

  getUserInfo(){
    return this.http.get<UserInfo>('https://discogs-app-dffb9-default-rtdb.firebaseio.com/my-info.json');
  }

  showUserInfo(){
    this.getUserInfo().subscribe((data: UserInfo) =>{
      console.log(data);
      this.myInfo = data;
    })
  }
}
