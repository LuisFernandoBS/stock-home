import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { Item } from '../../shared/interfaces/item.interface';

interface Categoria {
  nome: string;
  icone: string;
  qtdeItens: number;
  itens: Item[];
}

@Component({
  selector: 'app-painel-categorias',
  standalone: true,
  imports: [MatAccordion,MatExpansionModule,MatIconModule,MatChipsModule,CommonModule,MatListModule],
  templateUrl: './painel-categorias.component.html',
  styleUrl: './painel-categorias.component.css'
})
export class PainelCategoriasComponent {
  private _listaItens: Item[] = [];
  listaCategorias: Categoria[] = [];

  @Input()
  set listaItens(listaAtualizada: Item[]) {
    this._listaItens = listaAtualizada;
    this.listaCategorias = this._listaItens.reduce((categorias: Categoria[], item: Item) => {
      const categoriaExistente = categorias.find(categoria => categoria.nome === item.categoria);
      if (categoriaExistente) {
        categoriaExistente.qtdeItens++;
        categoriaExistente.itens = [...categoriaExistente.itens, item];
      } else {
        categorias.push({
          nome: item.categoria,
          icone: item.icone,
          qtdeItens: 1,
          itens: [item]
        });
      }
      return categorias;
    }, []);
  }

  get listaItens(): Item[] {
    return this._listaItens;
  }
}
