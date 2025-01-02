import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  SignInForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(
    private apiService: ApiService
  ) {}

  signIn() {
    if(!this.SignInForm.valid) {
      console.log("Invalid Form Input !");
      return;
    }
    const { email, password } = this.SignInForm.value;
    this.apiService.post(`auth/login`, {email, password})
    .subscribe(res => {
      console.log(res)
    })
  }

}
