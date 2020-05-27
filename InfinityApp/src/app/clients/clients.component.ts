import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute ) { }

  btnClickLictClient(): void {
    //console.log("The card has been clicked!")
    this.router.navigate(['lista'],{relativeTo:this.route})
  }

  btnClickAddClient(): void {
    //console.log("The card has been clicked!")
    this.router.navigate(['adicionar'],{relativeTo:this.route})
  }

  ngOnInit() {
  }

}
