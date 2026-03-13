import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES";

  constructor(){}

  salvar(cliente: Cliente){

    const storage = this.obterStorage();

    cliente.nome = cliente.nome?.toLowerCase();
    cliente.email = cliente.email?.toLowerCase();
    
    storage.push(cliente);

    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));

    console.log("cliente salvo ->", cliente);
  
  }

  pesquisarCliente(nome: string) : Cliente[]{

    const clienteList = this.obterStorage();

    if (!nome){
      return clienteList;
    }

    return clienteList.filter(cliente => cliente.nome?.indexOf(nome) !== -1 );

  }

  obterStorage() : Cliente[] {
    const repositorioClientes = localStorage.getItem(ClienteService.REPO_CLIENTES);
  
    if (repositorioClientes){
      const clienteLista: Cliente[] = JSON.parse(repositorioClientes);
      return clienteLista;
    }

    const clienteLista: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clienteLista));

    return clienteLista;
  
  }

}
