import { UsersProvider } from '../../providers/vendas/vendas';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the CriarVendaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-venda',
  templateUrl: 'criar-venda.html',
})
export class CriarVendaPage {
  model: Vendas;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private userProvider: UsersProvider) {

    this.model = new Vendas();
    this.model.cliente = 'Fernando';
    this.model.dataPedido = '26/07/1991';
    this.model.pagamento = 1;
    this.model.codProduto = 12345;
    this.model.descricao = 'Teste';
    this.model.quantidade = 123;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarVendaPage');
  }

}

  export class Vendas {
    cliente: string;
    dataPedido: string;
    pagamento: number;
    codProduto: number;
    descricao: string;
    quantidade: number;
  }