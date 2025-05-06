import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { Item, Categoria } from '../../shared/interfaces/item.interface';

interface CategoriaEstatisticas {
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
  refCategorias = input<Categoria[]>([]);
  listaCategorias: CategoriaEstatisticas[] = [];

  @Input()
  set listaItens(listaAtualizada: Item[]) {
    this._listaItens = listaAtualizada;
    this.listaCategorias = this._listaItens.reduce((categorias: CategoriaEstatisticas[], item: Item) => {
      item.categoria = this.refCategorias().find(categoria => categoria.valor === item.categoria)?.descricao || item.categoria
      const categoriaExistente = categorias.find(categoria => categoria.nome === item.categoria);
      if (categoriaExistente) {
        categoriaExistente.qtdeItens++;
        categoriaExistente.itens = [...categoriaExistente.itens, item];
      } else {
        categorias.push({
          nome:  item.categoria,
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
