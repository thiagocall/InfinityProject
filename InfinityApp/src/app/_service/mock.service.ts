import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor() { }

  getOrders() {
   
      let order: Order = new Order();
   
      order.id = 1;
      order.clientNumber = 1;
      order.clientName= "Jose";
      order.orderItems = [{"Description":"Caneca homem-aranha"},{"Camisa":"Homem de Ferro"}];
      order.orderDate = "25/05/2020";
      order.orderEndDate = "30/05/2020";
      order.deliveryCost = 75.9;
      order.Address = {"Description": "Rua Moreira", "Number":79, "Complement": "Apto 202"};
      order.Status = 5;

      let order2: Order = new Order();
   
      order2.id = 2;
      order2.clientNumber = 2;
      order2.clientName= "Carlos";
      order2.orderItems = [{"Description":"Caneca homem-aranha"},{"Camisa":"Homem de Ferro"}];
      order2.orderDate = "20/05/2020";
      order2.orderEndDate = "24/05/2020";
      order2.deliveryCost = 23.00;
      order2.Address = {"Description": "Rua Moreira", "Number":79, "Complement": "Apto 202"};
      order.Status = -1;

      let listOrders = new Array<any>();

      listOrders.push(order,order2);

      return listOrders;

  }

    getClients(){

      let client = new Client;
      client.clientName = "Jose";
      client.clientNumber = 1;
      client.birthDate = "05/11/1979";
      client.email = "Jose@hotmail.com";
      client.address = {"Description": "Rua Oliveira de Andrade", "Number":"102", "Complement": "Casa 4"};
      client.gender = "MASCULINO";

      let client2 = new Client;
      client.clientName = "Augusto";
      client.clientNumber = 2;
      client.birthDate = "05/11/1990";
      client.email = "Augusto@hotmail.com";
      client.address = {"Description": "Rua Moreira", "Number":"79", "Complement": "Apto 202"};
      client.gender = "MASCULINO";

      let client3 = new Client;
      client.clientName = "Kátia Flávia";
      client.clientNumber = 3;
      client.birthDate = "05/11/1981";
      client.email = "Augusto@hotmail.com";
      client.address = {"Description": "Rua Galziou", "Number":"895", "Complement": "Fundos"};
      client.gender = "FEMININO";

      let listClients = new Array<any>();

      listClients.push(client,client2, client3);

      return listClients;

    }



}

class Order{
  constructor() {}

  id: number;
  clientNumber: number;
  clientName: string;
  orderItems: any[];
  orderDate: string;
  orderEndDate: string;
  deliveryCost: number;
  Address: any;
  Status: number;
}

class Client {
  clientNumber: number;
  clientName: string;
  birthDate: string;
  email: string;
  address: any;
  gender: string;
}

