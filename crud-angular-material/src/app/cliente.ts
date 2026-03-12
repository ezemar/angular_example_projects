import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';
import { Cadastro } from './cadastro/cadastro';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  constructor(){}

  salvar(cliente: Cliente){
    console.log(cliente);
  }

}
