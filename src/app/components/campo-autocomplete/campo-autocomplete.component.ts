import {Component, OnInit, input, Input, Output, EventEmitter} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

/**
 * @title Highlight the first autocomplete option
 */
@Component({
  selector: 'campo-autocomplete',
  templateUrl: 'campo-autocomplete.component.html',
  styleUrl: 'campo-autocomplete.component.css',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
})
export class CampoAutocomplete implements OnInit {
  private _opcoes: string[] = [];
  myControl = new FormControl('');
  opcoesFiltradas: Observable<string[]> = new Observable<string[]>();
  valor = input<string>('');


  @Input()
  set opcoes(listaOpcoesAtualizada: string[]) {
    this._opcoes = listaOpcoesAtualizada || [];
    const valorAtual = this.myControl.value || '';
    this.myControl.setValue(valorAtual);
  }

  get opcoes(): string[] {
    return this._opcoes;
  }

  @Output() valorChange = new EventEmitter<string>();


  ngOnInit() {
    this.opcoesFiltradas = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const val = value || '';
        this.valorChange.emit(val);
        return this.filtrar(val);
      }),
    );
  }

  private filtrar(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this._opcoes.filter(option => option.toLowerCase().includes(filterValue));
  }
}
