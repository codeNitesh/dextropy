import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {Users} from '../../models/users'
import {Login} from '../../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = "http://localhost:8080/users/";

  constructor( private http: HttpClient,
    private router: Router) { }

  setNewPassword(password: string, passResetToken: string){
    return this.http.put(this.baseUrl + "update_password?token=" +  passResetToken, password)
  }

  resetPasswordRequest(email: string){
    return this.http.post(this.baseUrl + "reset_password", email)
  }

  resendVerificationEmail(email: string){
    return this.http.post(this.baseUrl + "resend-verify", email)
  }

  registerUser(user: Users, userType: string): Observable<Object> {
    return this.http.post(this.baseUrl + "register?userType=" + userType, user);
  }

  loginUser(login: Login): Observable<Object> {
    return this.http.post(this.baseUrl + "login", login);
  }

  verifyUser(token: string) {
    return this.http.post(this.baseUrl + "verify?token=" + token, token);
  }
  

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}
