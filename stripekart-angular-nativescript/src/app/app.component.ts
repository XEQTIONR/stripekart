import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private userService : UserService){}

    ngOnInit(){
        console.log('ng on init');
        if (typeof(Storage) !== "undefined")
        {
            if(localStorage.getItem('refresh_token')!=null
                && sessionStorage.getItem('access_token') == null
                && parseInt(localStorage.getItem('tab_count'))>0)
            {
                console.log("Sending auth request");
                localStorage.setItem('auth_request', 'requested'); // 'requested' can be any non null value
                //localStorage.removeItem('auth_request'); // remove in handler
            }
            else
                console.log("NO ONE ELSE IS LOGGED IN");
        }


    }
}
