import { Component,ChangeDetectionStrategy, inject, Inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-finalizar',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dialog-finalizar.component.html',
  styleUrl: './dialog-finalizar.component.css'
})

export class DialogFinalizarComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public finalizarLista: () => void,
    private dialog: MatDialog
  ) {}

}