import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users';
import { tap } from 'rxjs/operators/';

@Injectable()
export class UserService {

    private usersList: User[] = [];

    constructor(private http: HttpClient,
                @Inject('BASE_URL') private apiEndpoint: string) {

    }

    getUser(id: number) {
        return this.http.get<User>(this.apiEndpoint + 'api/Users/' + id);
    }

    addUser(newUser: User) {

        return this.http.post(this.apiEndpoint + 'api/Users', newUser);

    }

    getUsers() {
        return this.http.get<User[]>(this.apiEndpoint + 'api/Users').pipe(tap(
            x => {
                this.usersList = x;
                // console.log(this.usersList);
            }
        ));
    }

}
