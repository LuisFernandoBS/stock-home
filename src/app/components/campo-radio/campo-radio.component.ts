import {Component,input,EventEmitter,Output,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { Opcoes } from '../../shared/interfaces/opcoes.interface';

@Component({
  selector: 'app-campo-radio',
  standalone: true,
  imports: [MatRadioModule,FormsModule,CommonModule],
  templateUrl: './campo-radio.component.html',
  styleUrl: './campo-radio.component.css'
})
export class CampoRadioComponent {
  opcoes = input<Opcoes[]>([]);

  @Input() valorSelecionado: number = 1;
  @Output() valorSelecionadoChange = new EventEmitter<number>();

  opcaoSelecionada(valor: number) {
    this.valorSelecionadoChange.emit(valor);
  }
}
