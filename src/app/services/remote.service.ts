import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class RemoteService {

  constructor(private httpClient: HttpClient) { }





  public url = 'https://reqres.in/api/users';

  getUsers(): Observable<User[]> {
    return this.httpClient.get<Response>(this.url).pipe(
      map(resp => resp.data)

    )

  }

  getUser(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.url}/${id}`)
  }
}


interface Response {
  data: User[]
}

interface UserResponse {
  data: User
}
