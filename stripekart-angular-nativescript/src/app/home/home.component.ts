import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  title = 'stripekart-angular-nativescript';

  constructor(private userService : UserService) { }

  ngOnInit() {
      console.log("HOME COMPONENT ON INIT");
      console.log('USER SERVICE EMAIL: ',this.userService.email);
  }
}
