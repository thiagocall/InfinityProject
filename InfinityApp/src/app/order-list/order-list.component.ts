import { Component, OnInit } from '@angular/core';
import { MockService } from '../_service/mock.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private mockService: MockService) { }

  dados: any;


  ngOnInit() {
    this.dados = this.mockService.getOrders();
    console.log(this.dados);
  }


}
