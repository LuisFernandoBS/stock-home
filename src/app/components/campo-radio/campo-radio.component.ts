import {Component,input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

interface Opcoes {
  valor: number;
  descricao: string;
}

@Component({
  selector: 'app-campo-radio',
  standalone: true,
  imports: [MatRadioModule,FormsModule,CommonModule],
  templateUrl: './campo-radio.component.html',
  styleUrl: './campo-radio.component.css'
})
export class CampoRadioComponent {
  opcoes = input<Opcoes[]>([]);
  valorSelecionado = 1;
}
