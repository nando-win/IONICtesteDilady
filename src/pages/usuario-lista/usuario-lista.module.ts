import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsuarioListaPage } from './usuario-lista';

@NgModule({
  declarations: [
    UsuarioListaPage,
  ],
  imports: [
    IonicPageModule.forChild(UsuarioListaPage),
  ],
})
export class UsuarioListaPageModule {}
