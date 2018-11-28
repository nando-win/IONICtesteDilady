import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaVendasPage } from './lista-vendas';

@NgModule({
  declarations: [
    ListaVendasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaVendasPage),
  ],
})
export class ListaVendasPageModule {}
