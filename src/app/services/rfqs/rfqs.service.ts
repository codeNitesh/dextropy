import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {RFQ} from '../../models/rfq'

@Injectable({
  providedIn: 'root'
})
export class RfqsService {

  private baseUrl = "http://localhost:8080/rfq/";

  constructor( private http: HttpClient) { }
  
  download(rfqId: string, purpose: string): Observable<Blob>{
    return this.http.get(this.baseUrl + "download/" + rfqId + "/" + purpose, {responseType: 'blob'})
  }

  downloadByAddress(fileAddress: string): Observable<Blob>{
    return this.http.get(this.baseUrl + "download/" + "?fileAddress=" + fileAddress, {responseType: 'blob'})
  }


  upload(fileToUpload: File, rfqId: string, purpose: string):Observable<any> {
    const file = new FormData();       
    file.append("file", fileToUpload, fileToUpload.name);
    return this.http.post(this.baseUrl + "upload/"+ rfqId + "/" + purpose, file)
  }

  giveOrder(rfq: RFQ){
    return this.http.put(this.baseUrl+ "order/", rfq)
  }

  giveQuote(rfq: RFQ){
    return this.http.put(this.baseUrl+ "quote/", rfq)
  }

  getRFQ(rfqId: string){
    return this.http.get(this.baseUrl + "id/" + rfqId)
  }

  updateRFQ(rfqId: string, rfq: RFQ){
    return this.http.put(this.baseUrl+ "id/" + rfqId, rfq)
  }

  saveRFQ(rfq: RFQ): Observable<Object> {
    return this.http.post(this.baseUrl, rfq);
  }

  getAllRFQsById(userId: string){
    return this.http.get(this.baseUrl + userId);
  }
}
