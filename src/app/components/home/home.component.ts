import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CadastroItemComponent } from '../cadastro-item/cadastro-item.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule,MatToolbarModule,CadastroItemComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  
}

