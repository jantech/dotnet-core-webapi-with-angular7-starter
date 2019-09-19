import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from 'src/app/core/models/users';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../core/services/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, OnDestroy {

  result: Users[];
  unsubscriber: Subscription[] = [];
  registerForm: FormGroup;

  constructor(private http: HttpClient,
              @Inject('BASE_URL') private apiEndpoint: string,
              private formBuilder: FormBuilder,
              private userService: UserService) {

    this.registerForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [''],
      password: [null, Validators.required],
    });
    this.getUsers();
  }

  ngOnDestroy() {
    this.unsubscriber.forEach(x => {
      x.unsubscribe();
    });
  }

  ngOnInit() {

    console.log('api end point: ' + this.apiEndpoint);

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

    this.unsubscriber.push(this.userService.addUser(newUser).subscribe(res => {

      console.log(res);

      this.getUsers();

    }, (err) => {
      console.log(err);
    }));

  }

  getUsers() {

    this.unsubscriber.push(this.userService.getUsers().subscribe(res => {
      this.result = res;
    }));

  }

}
