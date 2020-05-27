import { Component, OnInit } from '@angular/core';
import { CepService } from '../_service/cep.service';



@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.css']
})
export class ClientsAddComponent implements OnInit {

  constructor(private cepService: CepService) { }

  masktype = -1
  cep


  changePFPJ() {

      this.masktype *= -1;
  }

  getCep(cep: string){
    cep = cep.replace('-','');
    console.log(cep)
    this.cepService.getCep(cep).subscribe(
      response => {
        this.cep = response;
       console.log(this.cep);
      },
      error => {
      
      }
    )
  }

  ngOnInit() {
  }

}
