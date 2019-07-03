import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-reset-email',
  templateUrl: './reset-email.component.html',
  styleUrls: ['./reset-email.component.css']
})
export class ResetEmailComponent implements OnInit {

    private emailForm = new FormGroup({
        email : new FormControl('')
    })

    constructor(private userService : UserService) { }

    ngOnInit() {
    }

    sendResetEmail() : void {
        this.userService.sendResetEmail(this.emailForm.value)
            .subscribe(
                (res) => {},
                (error) => {},
                () => {}
            )
    }

}
