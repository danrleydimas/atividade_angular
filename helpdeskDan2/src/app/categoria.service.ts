import { Injectable } from '@angular/core';
import { Categoria } from './model/categoria';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }

  categorias: Categoria[] = [
    {id: 1, nome: 'Romance'},
    {id: 2, nome: 'Terror'},
    {id: 3, nome: 'Tecnologia'}
    ];

    adicionaCategoria (categoria: Categoria): void {
      this.categorias.push(categoria);
      }
      getCategorias (): Categoria []{
        return this.categorias;
        }
}
