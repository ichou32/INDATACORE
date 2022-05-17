import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get<user[]>(`/users`);
}

register(user: user) {
    return this.http.post(`/users/register`, user);
}
}
