import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Communication } from 'src/app/models/communication';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private baseUrl = "http://localhost:8080/communication/";

  constructor( private http: HttpClient) { }

  getAllCommunication(rfqId: string, userId: string){
    return this.http.get(this.baseUrl + rfqId + '/' + userId + '/');
  }

  askQuestion(communication: Communication): Observable<Object>{
    return this.http.post(this.baseUrl + 'question', communication)
  }

  giveAnswer(id: string, answer: string, isPublic: Boolean){
    return this.http.put(this.baseUrl + id +'/answer?isPublic=' + isPublic, answer)
  }
}
 