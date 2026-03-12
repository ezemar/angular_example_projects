import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Cliente } from './cliente';
import { v4 as uuid } from 'uuid';
import { ClienteService } from '../cliente';

@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',  
})
export class Cadastro {

  constructor(private service: ClienteService){
    
  }

  cliente: Cliente = new Cliente;
  clienteList: Cliente[] = [];

  salvar(){
    this.cliente.id = uuid();
    this.clienteList.push(this.cliente);
    console.log("cliente salvo. Agora temos esses clientes: ", this.clienteList);
    this.limpar();    
  }
  
  limpar(){
    this.cliente = new Cliente;
  }

  aplicarFormatacao(){
    
    let onlyValuesString: string = "";
    
    if (this.cliente.cpf?.length === 3){
      this.cliente.cpf = this.cliente.cpf + ".";
    }
    
    if (this.cliente.cpf?.length === 7){
      this.cliente.cpf = this.cliente.cpf + ".";
    }

    if (this.cliente.cpf?.length === 11){
      this.cliente.cpf = this.cliente.cpf + "-";
    }

    }

    existeNaLista(){
      if (this.clienteList.includes(this.cliente)){
        return true;
      }
      else{
        return false;
      }
    }

}



