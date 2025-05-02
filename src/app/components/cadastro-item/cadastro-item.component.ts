import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CampoAutocomplete } from '../campo-autocomplete/campo-autocomplete.component';
import { CampoSelectComponent } from '../campo-select/campo-select.component';
import { Opcoes } from '../../shared/interfaces/opcoes.interface';
import { SALVAR_ITEM } from '../../shared/tokens/item.token';
import { DISPARAR_MSG } from '../../shared/tokens/mensagem.token';


@Component({
  selector: 'app-cadastro-item',
  standalone: true,
  imports: [FormsModule,MatToolbarModule,CampoAutocomplete,CampoSelectComponent,MatInputModule,MatFormFieldModule,MatButtonModule,CommonModule,MatIconModule],
  templateUrl: './cadastro-item.component.html',
  styleUrl: './cadastro-item.component.css'
})
export class CadastroItemComponent {
  private salvarItem = inject(SALVAR_ITEM);
  private dispararMensagem = inject(DISPARAR_MSG);

  opcoesPrioridade : Opcoes[] = [
    { valor: 1, descricao: 'Baixa' },
    { valor: 2, descricao: 'Média' },
    { valor: 3, descricao: 'Alta' }
  ];

  opcoesUnidades : Opcoes[] = [
    { valor: 'un', descricao: 'un' },
    { valor: 'kg', descricao: 'kg' },
    { valor: 'g', descricao: 'g' },
    { valor: 'litro', descricao: 'litro' }
  ];

  opcoesCategorias = [
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

  nomeItem: string = '';
  quantidadeItem: number = 0;
  unidadeItem: string = '';
  categoriaItem: string = '';
  prioridadeItem: number = 1;

  selecionarPrioridade(valor:number|string): void {
    this.prioridadeItem = Number(valor);
  }
  
  validarCampos(): boolean {
    return this.nomeItem !== '' && this.quantidadeItem > 0 && this.unidadeItem !== '' && this.categoriaItem !== '';
  }

  salvar() {
    if (!this.validarCampos()) {
      this.dispararMensagem('Preencha todos os campos obrigatórios!');
      return;
    }
    this.salvarItem({
      nome: this.nomeItem,
      quantidade: this.quantidadeItem,
      unidade: this.unidadeItem,
      categoria: this.categoriaItem,
      prioridade: this.prioridadeItem,
      status: false,
      icone: this.opcoesCategorias.find(c => c.valor === this.categoriaItem)?.icone || 'shopping_cart',
    });

    this.limparCampos();
  }
  
  limparCampos() {
    this.nomeItem = '';
    this.quantidadeItem = 0;
    this.unidadeItem = '';
    this.categoriaItem = '';
    this.prioridadeItem = 1;
  }


}
