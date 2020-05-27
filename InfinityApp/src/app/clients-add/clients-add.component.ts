import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.css']
})
export class ClientsAddComponent implements OnInit {

  constructor() { }

  masktype = -1


  changePFPJ() {

      this.masktype *= -1;
  }

  ngOnInit() {
  }

}
