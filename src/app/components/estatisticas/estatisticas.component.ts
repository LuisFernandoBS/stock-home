import { Component, input } from '@angular/core';
import { PainelCategoriasComponent } from '../painel-categorias/painel-categorias.component';
import { Item, Categoria } from '../../shared/interfaces/item.interface';


@Component({
  selector: 'app-estatisticas',
  standalone: true,
  imports: [PainelCategoriasComponent],
  templateUrl: './estatisticas.component.html',
  styleUrl: './estatisticas.component.css'
})
export class EstatisticasComponent {
  listaItens = input<Item[]>([]);
  categorias = input<Categoria[]>([]);
}
