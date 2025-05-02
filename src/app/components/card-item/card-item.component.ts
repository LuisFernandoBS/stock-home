import { Component, input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { Item } from '../../shared/interfaces/item.interface';
import { DELETAR_ITEM, ALTERAR_STATUS_ITEM } from '../../shared/tokens/item.token';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [MatCardModule,MatIconModule,MatChipsModule,CommonModule],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {
  index = input<number>();
  item = input<Item>();
  prioridades = [{nome: 'Baixa', valor: 1, class: 'baixa-prioridade' }, { nome: 'Média', valor: 2, class: 'media-prioridade' }, { nome: 'Alta', valor: 3, class: 'alta-prioridade' }];
  prioridadeItem = this.prioridades[0];

  private deletar = inject(DELETAR_ITEM);
  private alterarStatus = inject(ALTERAR_STATUS_ITEM);

  ngOnInit(): void {
    this.prioridadeItem = this.prioridades.find((prioridade) => prioridade.valor === this.item()?.prioridade) || this.prioridades[0];
  }

  alterarStatusItem(): void {
    const indexValue = this.index();
    if (indexValue !== undefined) {
      this.alterarStatus(indexValue);
    }
  }

  deletarItem(): void {
    const indexValue = this.index();
    if (indexValue !== undefined) {
      this.deletar(indexValue);
    }
  }
}
