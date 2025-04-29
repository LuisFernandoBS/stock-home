import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from '../card-item/card-item.component';
import { Item } from '../../shared/interfaces/item.interface';

@Component({
  selector: 'app-lista-itens',
  standalone: true,
  imports: [CardItemComponent,CommonModule],
  templateUrl: './lista-itens.component.html',
  styleUrl: './lista-itens.component.css'
})
export class ListaItensComponent {
  listaItens = input<Item[]>([]);
}
