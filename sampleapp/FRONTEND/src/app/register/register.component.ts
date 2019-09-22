import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/core/models/users';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../core/services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  unsubscriber: Subscription;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {

    this.registerForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [''],
      password: [null, Validators.required],
    });
  }

  ngOnDestroy() {
    if (this.unsubscriber) {
      this.unsubscriber.unsubscribe();
    }
  }

  ngOnInit() {

  }

  get rf() {
    return this.registerForm.controls;
  }


  addUser() {

    if (this.registerForm.invalid) {
      return false;
    }

    console.log(this.registerForm.value);

    const newUser = this.registerForm.value;

    this.unsubscriber = this.userService.addUser(newUser).subscribe(res => {

      console.log(res);

    }, (err) => {
      console.log(err);
    });

  }

}
