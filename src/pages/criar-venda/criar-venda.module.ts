import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarVendaPage } from './criar-venda';

@NgModule({
  declarations: [
    CriarVendaPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarVendaPage),
  ],
})
export class CriarVendaPageModule {}
