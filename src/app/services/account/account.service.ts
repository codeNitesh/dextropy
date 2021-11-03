import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Capability, Machine, Users } from 'src/app/models/users';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseUrl = "http://localhost:8080/users/"
  constructor(private http: HttpClient,) { }


  getUserDetails(userId: string){
    return this.http.get(this.baseUrl + userId);
  }

  getCurrentUserId(){
    return this.http.get(this.baseUrl + "now");
  }

  updateUserDetails(userId: string, user: Users): Observable<Object>{
    return this.http.put(this.baseUrl + user.type.toLowerCase() + "/" + userId, user);
  }
}
