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

  //injeção de service aqui
  constructor(private service: ClienteService){}

  cliente: Cliente = Cliente.newCliente();
  
  salvar(){
    this.service.salvar(this.cliente);  
    this.cliente = Cliente.newCliente(); 
  }
  
  limpar(){
    this.cliente = Cliente.newCliente();
  }

  limparLista(){
    console.log("limpando a lista de clientes...");
  }

  aplicarFormatacaoCpf(){
        
    if (this.cliente.cpf?.length === 3 || this.cliente.cpf?.length === 7){
      this.cliente.cpf = this.cliente.cpf + ".";
    }
    
    if (this.cliente.cpf?.length === 11){
      this.cliente.cpf = this.cliente.cpf + "-";
    }

  }

  aplicarFormatacaoData(){
        
    if (this.cliente.dataNascimento?.length == 2 || this.cliente.dataNascimento?.length === 5){
      this.cliente.dataNascimento = this.cliente.dataNascimento + "/";
    }
    
  }

}



