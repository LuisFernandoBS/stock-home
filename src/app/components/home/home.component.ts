import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CadastroItemComponent } from '../cadastro-item/cadastro-item.component';
import { ListaItensComponent } from '../lista-itens/lista-itens.component';
import { Item } from '../../shared/interfaces/item.interface';
import { DELETAR_ITEM, ALTERAR_STATUS_ITEM, SALVAR_ITEM } from '../../shared/tokens/item.token';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule,MatToolbarModule,CadastroItemComponent,ListaItensComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [
    {
      provide: SALVAR_ITEM,
      useFactory: (component: HomeComponent) => component.salvarItem.bind(component),
      deps: [HomeComponent]
    },
    {
      provide: ALTERAR_STATUS_ITEM,
      useFactory: (component: HomeComponent) => component.alterarStatus.bind(component),
      deps: [HomeComponent]
    },
    {
      provide: DELETAR_ITEM,
      useFactory: (component: HomeComponent) => component.deletarItem.bind(component),
      deps: [HomeComponent]
    }
  ]
})

export class HomeComponent {
  listaItens : Item[] = [
    { nome: 'Item 1', unidade: 'und', quantidade: 10, categoria: 'Bebidas', prioridade: 1, icone: 'local_bar',status: false },
    { nome: 'Item 2', unidade: 'und', quantidade: 5, categoria: 'Alimentos Perecíveis', prioridade: 2, icone: 'restaurant',status: false },
    { nome: 'Item 3', unidade: 'und', quantidade: 20, categoria: 'Congelados', prioridade: 3, icone: 'ac_unit',status: false },
    { nome: 'Item 4', unidade: 'kg', quantidade: 15, categoria: 'Carnes e Peixes', prioridade: 1, icone: 'set_meal',status: false },
  ];

  salvarItem(item: Item): void {
    if (item === undefined) return;
    this.listaItens.push(item);
    this.reorganizarListaItens();
  }

  deletarItem(index: number|undefined) {
    if (index === undefined) return;
    this.listaItens.splice(index, 1);
  }

  alterarStatus(index: number|undefined): void {
    if (index === undefined) return;
    this.listaItens[index].status = !this.listaItens[index].status;
    this.reorganizarListaItens();
  }

  reorganizarListaItens() {
    this.listaItens.sort((a, b) => {
      if (a.status === b.status) {
      return this.listaItens.indexOf(a) - this.listaItens.indexOf(b);
      }
      return Number(a.status) - Number(b.status);
    });
  }

}

