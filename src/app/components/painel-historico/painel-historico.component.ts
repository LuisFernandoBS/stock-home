import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';
import { StockDbService } from '../../shared/services/stock-db.service';
import { Item } from '../../shared/interfaces/item.interface';

interface Historico {
  id: string;
  itens: Item[];
  data: string;
  hora: string;
}

@Component({
  selector: 'app-painel-historico',
  standalone: true,
  imports: [CommonModule, MatAccordion, MatExpansionModule,MatTableModule,MatChipsModule],
  templateUrl: './painel-historico.component.html',
  styleUrl: './painel-historico.component.css'
})
export class PainelHistoricoComponent {
  colunas: string[] = ['nome', 'qtd'];
  historico: Historico[] = [];
  
  constructor(private stockService: StockDbService) {}
  
  async ngOnInit() {
    this.carregarHistorico();
  }

  async carregarHistorico() {
    this.historico = await this.stockService.obterHistorico();
  }

}
