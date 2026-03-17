import { Routes } from '@angular/router';
import { Consulta } from './consulta/consulta';
import { Cadastro } from './cadastro/cadastro';

export const routes: Routes = [
    { path: '', redirectTo: 'consulta', pathMatch: 'full' },
    { path: 'cadastro', component: Cadastro},
    { path: 'consulta', component: Consulta},
    
];
