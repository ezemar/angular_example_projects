import { Component, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { v4 as uuid } from 'uuid';
import { ClienteService } from '../cliente';
import { Cliente } from '../cadastro/cliente';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ɵEmptyOutletComponent } from "@angular/router";

@Component({
  selector: 'app-consulta',
  imports: [FlexLayoutModule, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, CommonModule, MatTableModule],
  templateUrl: './consulta.html',
  styleUrl: './consulta.scss',
})
export class Consulta {

  clienteList: Cliente[] = [];
  colunasTable: string[] = ["id", "nome", "email", "cpf", "dataNascimento"];
  nomeBusca: string = "";

  constructor(private service: ClienteService){}

  ngOnInit(){
    this.clienteList = this.service.pesquisarCliente("");
    console.log("passou por aqui");
  }

  pesquisar() {
    this.clienteList = this.service.pesquisarCliente(this.nomeBusca);
  }

}
