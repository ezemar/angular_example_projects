import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './ItemLista';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.html',
  styleUrl: './lista-compras.scss',
})
export class ListaCompras {

  item: string = "";
  lista: ItemLista[] = [];

  adicionarItem(){

    console.log("item recebido", this.item);
    console.log("item recebido transformado para caixa baixa", this.item = this.item.toLowerCase());
    
    if (this.item.length === 0 || this.lista.some(itemLista => itemLista.nome === this.item)) {
      
    }

    else {

    let itemLista = new ItemLista();

    itemLista.nome = this.item;
    
    itemLista.id = this.lista.length + 1;

    this.lista.push(itemLista);

    console.log("lista atualizada: ", this.lista);
    
    }

  }

  riscarItem(itemLista: ItemLista){
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista(){
    this.lista = [];
  }

}
