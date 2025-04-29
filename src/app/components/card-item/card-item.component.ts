import { Component, input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { Item } from '../../shared/interfaces/item.interface';
import { DELETAR_ITEM } from '../../shared/tokens/item.token';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [MatCardModule,MatIconModule,CommonModule],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.css'
})
export class CardItemComponent {
  index = input<number>();
  item = input<Item>();

  private deletar = inject(DELETAR_ITEM);

  alterarStatusItem(item: Item|null): void {
    if (!item) return;
    item.status = !item.status;
  }

  deletarItem(): void {
    const indexValue = this.index();
    if (indexValue && indexValue !== undefined) {
      this.deletar(indexValue);
    }
  }
}
