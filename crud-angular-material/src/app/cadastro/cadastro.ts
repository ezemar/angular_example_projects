import { Component } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-cadastro',
  imports: [FlexLayoutModule, MatCardModule, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',  
})
export class Cadastro {

  cpf: string = "";

  aplicarFormatacao(){
    
    let onlyValuesString: string = "";
    
    if (this.cpf.length === 3){
      this.cpf = this.cpf + ".";
    }
    
    if (this.cpf.length === 7){
      this.cpf = this.cpf + ".";
    }

    if (this.cpf.length === 11){
      this.cpf = this.cpf + "-";
    }

    //if (this.cpf.length > 14){
    //  this.cpf = this.cpf.slice(0,14);
    //  
    //}
    
    }

}



