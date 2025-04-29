import { Component, Inject } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-mensagem',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './mensagem.component.html',
  styleUrl: './mensagem.component.css'
})
export class MensagemComponent {
  constructor(
    private snackBarRef: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA) public data: { msg: string }
  ) {}

  fecharMensagem() {
    this.snackBarRef.dismiss();
  }
}
