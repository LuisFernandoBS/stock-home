import { Component, inject, input } from '@angular/core';
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
import { Categoria } from '../../shared/interfaces/item.interface';
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

  categorias = input<Categoria[]>([]);


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
      icone: this.categorias().find(c => c.valor === this.categoriaItem)?.icone || 'shopping_cart',
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
