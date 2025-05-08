import { Component, input, inject, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PainelCategoriasComponent } from '../painel-categorias/painel-categorias.component';
import { PainelHistoricoComponent } from '../painel-historico/painel-historico.component';
import { DialogFinalizarComponent } from '../dialog-finalizar/dialog-finalizar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import { Item, Categoria } from '../../shared/interfaces/item.interface';
import { FINALIZAR } from '../../shared/tokens/stock.token';

@Component({
  selector: 'app-estatisticas',
  standalone: true,
  imports: [PainelCategoriasComponent,MatIconModule,MatButtonModule,CommonModule,MatTabsModule,PainelHistoricoComponent],
  templateUrl: './estatisticas.component.html',
  styleUrl: './estatisticas.component.css'
})
export class EstatisticasComponent {
  listaItens = input<Item[]>([]);
  categorias = input<Categoria[]>([]);

  readonly dialog = inject(MatDialog);
  readonly finalizarLista = inject(FINALIZAR);

  @ViewChild(PainelHistoricoComponent) painelHistorico!: PainelHistoricoComponent;

  abrirDialog(): void {
    this.dialog.open(DialogFinalizarComponent, {
      data: this.finalizar.bind(this),
      width: '250px'
    });
  }

  finalizar(){
    this.finalizarLista();
    this.dialog.closeAll();
    this.painelHistorico.carregarHistorico();
  }
}
