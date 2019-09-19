import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';

@Injectable()
export class UserService {

    constructor(private http: HttpClient,
                @Inject('BASE_URL') private apiEndpoint: string) {

    }

    addUser(newUser: Users) {

        return this.http.post(this.apiEndpoint + 'api/Users', newUser);

    }

    getUsers() {
        return this.http.get<Users[]>(this.apiEndpoint + 'api/Users');
    }

}
