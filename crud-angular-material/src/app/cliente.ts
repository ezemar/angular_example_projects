import { Injectable } from '@angular/core';
import { Cliente } from './cadastro/cliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  static REPO_CLIENTES = "_CLIENTES";
  constructor(){}

  camposVazios(cliente: Cliente) {

    if (cliente.nome.length === 0 || cliente.email.length === 0 || cliente.cpf.length === 0 || cliente.dataNascimento.length === 0){
      return true;
    }
    return false;

  }

  atualizar(cliente: Cliente){
  
    const storage = this.obterStorage();
    
    storage.forEach(clienteNoStorage => { 
      if (clienteNoStorage.id === cliente.id){
        Object.assign(clienteNoStorage, cliente);
      }

      });

      localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));

  }

  salvar(cliente: Cliente) {

    const storage = this.obterStorage();
  
    if (!this.jaExiste(cliente)){

        storage.push(cliente);
        localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(storage));
        console.log("cliente salvo ->", cliente);
        
      }

  }

  jaExiste(cliente: Cliente){
    
    if ( this.pesquisarClientePorCpf(cliente.cpf).length > 0) {
      return true;
    } 
    
    if (this.pesquisarClientePorEmail(cliente.email).length > 0 ){
      return true;
    }

    return false;
  
  }

  pesquisarCliente(nome: string) : Cliente[]{

    const clienteList = this.obterStorage();

    if (!nome){
      return clienteList;
    }

    return clienteList.filter(cliente => cliente.nome.indexOf(nome) !== -1 );

  }

  limparLocalStorage(){
    const clienteLista: Cliente[] = [];
    localStorage.setItem(ClienteService.REPO_CLIENTES, JSON.stringify(clienteLista));
  }

  pesquisarClientePorCpf(cpf: string) : Cliente[]{

    const clienteList = this.obterStorage();

    if (!cpf){
      return clienteList;
    }

    return clienteList.filter(cliente => cliente.cpf.indexOf(cpf) !== -1 );

  }

  pesquisarClientePorId(id: string) : Cliente | undefined {

    const clienteList = this.obterStorage();
    
    return clienteList.find(cliente => cliente.id === id );

  }

  pesquisarClientePorEmail(email: string) : Cliente[]{

    const clienteList = this.obterStorage();

    if (!email){
      return clienteList;
    }

    return clienteList.filter(cliente => cliente.email.indexOf(email) !== -1 );

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
