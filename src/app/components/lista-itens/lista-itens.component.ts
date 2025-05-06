import { Component, Input, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CardItemComponent } from '../card-item/card-item.component';
import { Item, Categoria } from '../../shared/interfaces/item.interface';

@Component({
  selector: 'app-lista-itens',
  standalone: true,
  imports: [CardItemComponent, CommonModule, FormsModule, MatInputModule],
  templateUrl: './lista-itens.component.html',
  styleUrl: './lista-itens.component.css'
})
export class ListaItensComponent {
  private _listaItens: Item[] = [];
  listaItensFiltrada: Item[] = [];
  private _campoFiltroCards = "";
  categorias = input<Categoria[]>([]);


  get campoFiltroCards(): string {
    return this._campoFiltroCards;
  }

  set campoFiltroCards(valor: string) {
    this._campoFiltroCards = valor;
    this.filtrarListaItens(valor);
  }

  @Input()
  set listaItens(listaAtualizada: Item[]) {
    this._listaItens = listaAtualizada.map(item => {
      return { ...item, filtrado: true };
    });
    if (listaAtualizada.length === 0) {
      this._campoFiltroCards = "";
    }
    this.filtrarListaItens(this._campoFiltroCards);
  }

  get listaItens(): Item[] {
    return this._listaItens;
  }

  private filtrarListaItens(valor: string): void {
    this.listaItensFiltrada = this._listaItens.map(item => {
      item.nome.toLowerCase().includes(valor.toLowerCase()) ? (item.filtrado = true) : (item.filtrado = false);
      item.categoria = this.categorias().find(categoria => categoria.valor === item.categoria)?.descricao || item.categoria;
      return item;
    });
  }
}
