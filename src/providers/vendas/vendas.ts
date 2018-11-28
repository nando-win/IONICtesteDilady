import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the VendasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VendasProvider {
  private API_URL = 'http://localhost:52527/api/vendas/'

  constructor(public http: HttpClient) {}

    // console.log('Hello VendasProvider Provider');

    post(cliente: string, dataPedido: string, pagamento: number, codProduto: number, descricao: string, quantidade: number) {
      return new Promise((resolve, reject) => {
        
       // let url = this.API_URL + 'Get()';
         var venda = {
           cliente: cliente,
           dataPedido: dataPedido,
           pagamento: pagamento,
           codProduto: codProduto,
           descricao: descricao,
           quantidade: quantidade
         };

        this.http.post(this.API_URL, venda)
          .subscribe((result: any) => {
            resolve(result.json())
          },
          (error) => {
            reject(error.json())
          }
          )
      });
    }
  }