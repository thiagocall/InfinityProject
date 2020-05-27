import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {}

  dados: any;

  btnClcik(): void {
    // console.log("The card has been clicked!")
    this.router.navigate(['lista'], { relativeTo: this.route });
  }

  ngOnInit() {}

}
