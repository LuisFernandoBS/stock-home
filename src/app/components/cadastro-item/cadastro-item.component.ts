import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CampoAutocomplete } from '../campo-autocomplete/campo-autocomplete.component';
import { CampoSelectComponent } from '../campo-select/campo-select.component';
import { CampoRadioComponent } from '../campo-radio/campo-radio.component';

interface Opcoes {
  valor: number;
  descricao: string;
}

@Component({
  selector: 'app-cadastro-item',
  standalone: true,
  imports: [MatToolbarModule,CampoAutocomplete,CampoSelectComponent,MatInputModule,MatFormFieldModule,CampoRadioComponent,MatButtonModule],
  templateUrl: './cadastro-item.component.html',
  styleUrl: './cadastro-item.component.css'
})
export class CadastroItemComponent {
  opcoesPrioridade : Opcoes[] = [
    { valor: 1, descricao: 'Baixa' },
    { valor: 2, descricao: 'Média' },
    { valor: 3, descricao: 'Alta' }
  ];
}
