import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CadastroItemComponent } from '../cadastro-item/cadastro-item.component';
import { ListaItensComponent } from '../lista-itens/lista-itens.component';
import { EstatisticasComponent } from '../estatisticas/estatisticas.component';
import { Item, Categoria } from '../../shared/interfaces/item.interface';
import { DELETAR_ITEM, ALTERAR_STATUS_ITEM, SALVAR_ITEM } from '../../shared/tokens/item.token';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule,MatToolbarModule,CadastroItemComponent,ListaItensComponent,EstatisticasComponent],
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
    },
  ]
})

export class HomeComponent {
  listaItens : Item[] = [
    { nome: 'Item 1', unidade: 'und', quantidade: 10, categoria: 'Bebidas', prioridade: 1, icone: 'local_bar',status: false },
    { nome: 'Item 2', unidade: 'und', quantidade: 5, categoria: 'Alimentos Perecíveis', prioridade: 2, icone: 'restaurant',status: false },
    { nome: 'Item 3', unidade: 'und', quantidade: 20, categoria: 'Congelados', prioridade: 3, icone: 'ac_unit',status: false },
    { nome: 'Item 4', unidade: 'kg', quantidade: 15, categoria: 'Carnes e Peixes', prioridade: 1, icone: 'set_meal',status: false },
    { nome: 'Item 5', unidade: 'lt', quantidade: 8, categoria: 'Laticínios', prioridade: 2, icone: 'local_drink',status: false },
    { nome: 'Item 6', unidade: 'und', quantidade: 12, categoria: 'Higiene Pessoal', prioridade: 3, icone: 'soap',status: false },
    { nome: 'Item 7', unidade: 'kg', quantidade: 25, categoria: 'Grãos e Cereais', prioridade: 1, icone: 'rice_bowl',status: false },
    { nome: 'Item 8', unidade: 'und', quantidade: 30, categoria: 'Doces e Sobremesas', prioridade: 2, icone: 'cake',status: false },
    { nome: 'Item 9', unidade: 'und', quantidade: 18, categoria: 'Produtos de Limpeza', prioridade: 3, icone: 'cleaning_services',status: false }
  ];

  categorias : Categoria[] = [
    { valor: 'pereciveis', descricao: 'Alimentos Perecíveis', icone: 'restaurant' },
    { valor: 'nao_pereciveis', descricao: 'Alimentos Não Perecíveis', icone: 'local_grocery_store' },
    { valor: 'bebidas', descricao: 'Bebidas', icone: 'local_bar' },
    { valor: 'congelados', descricao: 'Congelados', icone: 'ac_unit' },
    { valor: 'carnes', descricao: 'Carnes e Peixes', icone: 'set_meal' },
    { valor: 'frutas_verduras', descricao: 'Frutas e Verduras', icone: 'spa' },
    { valor: 'padaria', descricao: 'Padaria e Confeitaria', icone: 'bakery_dining' },
    { valor: 'laticinios', descricao: 'Laticínios e Frios', icone: 'icecream' },
    { valor: 'limpeza', descricao: 'Produtos de Limpeza', icone: 'cleaning_services' },
    { valor: 'higiene', descricao: 'Higiene Pessoal', icone: 'health_and_safety' },
    { valor: 'papelaria', descricao: 'Papelaria', icone: 'menu_book' },
    { valor: 'petshop', descricao: 'Pet Shop', icone: 'pets' },
    { valor: 'temperos', descricao: 'Temperos e Condimentos', icone: 'restaurant_menu' },
    { valor: 'utilidades', descricao: 'Utilidades Domésticas', icone: 'home' },
    { valor: 'cuidados_casa', descricao: 'Cuidados com a Casa', icone: 'roofing' },
  ];

  
  salvarItem(item: Item): void {
    if (item === undefined) return;
    this.listaItens = [...this.listaItens, item];
    this.reorganizarListaItens();
  }

  deletarItem(index: number|undefined) {
    if (index === undefined) return;
    const novaLista = [...this.listaItens];
    novaLista.splice(index, 1);
    this.listaItens = novaLista;
  }

  alterarStatus(index: number|undefined): void {
    if (index === undefined) return;
    const novaLista = [...this.listaItens];
    novaLista[index].status = !novaLista[index].status;
    this.listaItens = novaLista;
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

