import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = "http://localhost:8080/admin/"

  constructor(private http: HttpClient,) { }

  updateAdminPassoword(password: string, token: string){
    return this.http.put(this.baseUrl + "update_password?token=" + token, password)
  }

  adminLogin(loginData: Login){
    return this.http.post(this.baseUrl + "login", loginData)
  }

  adminFetchAllUsersDetails(){
    return this.http.get(this.baseUrl + "users")
  }

  adminfetchAUserDetails(userId: string){
    return this.http.get(this.baseUrl + "users/" + userId)
  }

  adminUpdatePassword(password: string, token: string){
    return this.http.put(this.baseUrl + "update_password?token=" + token, password)
  }

  adminResetPassword(email: string){
    return this.http.post(this.baseUrl + "reset_password", email)
  }

  adminUpdateKYC(userId: string){
    return this.http.put(this.baseUrl + "update_kyc", userId)
  }

}
