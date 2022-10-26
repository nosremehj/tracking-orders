import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class TrackingService {

  constructor(private http: HttpClient) { }

  trackingOrders(code: any){
    console.log(code)
    return this.http.get(`${API_CONFIG.baseUrl}${code}`)
  }
}
