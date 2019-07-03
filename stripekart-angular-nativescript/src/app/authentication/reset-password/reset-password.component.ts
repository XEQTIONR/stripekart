import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  private token : FormControl;
  private email : FormControl;
  private resetForm  : FormGroup;
//   new FormGroup({
//     token : new FormControl(''),
//     email : new FormControl('')
//   });
  constructor(private userService : UserService, private route: ActivatedRoute) {

    // GET/Query Parameters
    this.route.queryParams.subscribe(params => {
        this.email=params['email'] ;
    });
    this.token=this.route.snapshot.params['token'];




  }

  ngOnInit() {

    this.resetForm = new FormGroup({
        token : new FormControl(this.token),
        username : new FormControl({ value : this.email, disabled : true }),
        password : new FormControl(),
        password_confirmation : new FormControl()
    });
    // Route
  }

  attemptReset() : void {

    this.userService.resetPassword(this.resetForm.value)
        .subscribe(
            (res) => {

            },
            (error) => {

            },
            () => {}
        )

  }

}
