import { Component, OnInit } from '@angular/core';
import { TrackingService } from 'src/app/services/tracking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private orders: TrackingService) { }

  ordertest = "nm094424765Br";

  order: string ='';
  object: any [any] = []; 


  ngOnInit(): void {
  }
  trackingOrders():void {
    this.orders.trackingOrders(this.order.toUpperCase()).subscribe(data => {
      this.object = data;
    })
  }
}
