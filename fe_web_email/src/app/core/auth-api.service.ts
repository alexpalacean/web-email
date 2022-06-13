import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { ApiService } from './api.service';

export interface User {
    username: string;
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private apiService: ApiService) { }

    createUser(payload: User) {
        return this.apiService.post('user', null, payload).pipe(map(response => response));
    }

    users() {
        return this.apiService.get('user', null)
    }
}