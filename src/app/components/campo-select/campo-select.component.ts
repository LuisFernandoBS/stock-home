import {Component,input, Output, EventEmitter} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Opcoes } from '../../shared/interfaces/opcoes.interface';

@Component({
  selector: 'app-campo-select',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule],
  templateUrl: './campo-select.component.html',
  styleUrl: './campo-select.component.css'
})
export class CampoSelectComponent {
  nome = input.required<string>();
  opcoes = input<Opcoes[]>([]);

  valorSelecionado = input<string | number>('');
  @Output() valorSelecionadoChange = new EventEmitter<string | number>();

  opcaoSelecionada(valor: string | number) {
    this.valorSelecionadoChange.emit(valor);
  }
}