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
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',  
})
export class Cadastro {

  //injeção de service aqui
  constructor(
    private service: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  
  ){}

  cliente: Cliente = Cliente.newCliente();
  atualizando: boolean = false;
  
  salvar(){
    if (!this.atualizando){
      this.service.salvar(this.cliente);
      this.limpar();    
    }
    else{
      console.log("atualizando cliente... apenas log...");
      this.service.atualizar(this.cliente);
      this.router.navigate(['consulta']);
    }
  }
  
  limpar(){
    this.cliente = Cliente.newCliente();
  }

  limparLocalStorage(){
    this.service.limparLocalStorage();
    console.log("limpando o local storage dos clientes...");
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
    
    if (this.cliente.dataNascimento.length == 2 || this.cliente.dataNascimento.length === 5){
      this.cliente.dataNascimento = this.cliente.dataNascimento + "/";
    }

    if (this.cliente.dataNascimento.length >= 11){
    
      const dataNascimentoList: string[] = this.cliente.dataNascimento.split("/");
     
    }

    
  }

  formatarNome() {
    this.cliente.nome = this.cliente.nome
      .toLowerCase()
      .split(' ')
      .map(p => p.charAt(0).toUpperCase() + p.slice(1))
      .join(' ');
  }

  autocompletarEmail() {
    if (this.cliente.email.endsWith("@gmail")){
      this.cliente.email = this.cliente.email + ".com"
    }
    if (this.cliente.email.endsWith("@hotmail")){
      this.cliente.email = this.cliente.email + ".com"
    }
    if (this.cliente.email.endsWith("@yahoo")){
      this.cliente.email = this.cliente.email + ".com.br"
    }
  
  }

  ngOnInit(): void{
    this.route.queryParamMap.subscribe( (query: any) => {
      const params = query['params'];
      const id = params['id'];

      if (id){
        let clienteEncontrado = this.service.pesquisarClientePorId(id);

        if (clienteEncontrado){
          this.atualizando = true;
          this.cliente = clienteEncontrado;
        }

      }
      console.log("id", id);
    });
  }

}



