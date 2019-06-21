import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public token : String;
  public email : String;
  constructor(private route: ActivatedRoute) {

    // GET/Query Parameters
    this.route.queryParams.subscribe(params => {
        this.email = params['email'];
    });
  }

  ngOnInit() {

    // Route
    this.token = this.route.snapshot.params['token'];
    //this.email = this.route.snapshot.params['email'];
  }

}
