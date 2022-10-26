import { Component, OnInit } from '@angular/core';
import { TrackingService } from 'src/app/services/tracking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  constructor(private orders: TrackingService) { }
  order: any ='';


  ngOnInit(): void {
  }
  trackingOrders():void {
    this.orders.trackingOrders(this.order).subscribe(data => {
      console.log('Código de rastreio:', this.order)
      console.log(data)
    })
  }
}
