import { Component, OnInit } from '@angular/core';
import { CepService } from '../_service/cep.service';
import { AES, enc, mode } from 'crypto-js';
import { HttpClient } from '@angular/common/http';
import {BankService} from '../_service/bank.service';
import { JsonPipe } from '@angular/common';



@Component({
  selector: 'app-clients-add',
  templateUrl: './clients-add.component.html',
  styleUrls: ['./clients-add.component.css']
})
export class ClientsAddComponent implements OnInit {

  constructor(private cepService: CepService, private http: HttpClient, private bankService: BankService) { }

  masktype = -1
  cep
  autocomp:  any;
  banks;


  changePFPJ() {

      this.masktype *= -1;
  }

  getCep(cep: string){
    cep = cep.replace('-','');
    console.log(cep)
    this.cepService.getCep(cep).subscribe(
      response => {
        if (!response.hasOwnProperty('erro'))
        {
          this.cep = response;
        }
        else {
          return
        }
       console.log(this.cep);
      },
      error => {
      
      }
    )
  }


  getselect(data: string) {

    console.log(data.split(' - ')[0]) 

  }

  geteData():void {

    this.banks = this.bankService.getBanks();

    
    
    var dynamicoptions = {};
    this.banks.forEach(function(data) {
      dynamicoptions[data.value + ` - ${data.label}`] = null
    })      
      console.log(dynamicoptions)
    this.autocomp = {
        data: dynamicoptions,
        'limit':3,
        'id': dynamicoptions[0]
    }
  
  }



  ngOnInit() {

    this.geteData();
    
  }

}
