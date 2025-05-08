import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DISPARAR_MSG } from './shared/tokens/mensagem.token';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MensagemComponent],
  providers: [
      {
        provide: DISPARAR_MSG,
        useFactory: (component: AppComponent) => component.dispararMensagem.bind(component),
        deps: [AppComponent]
      }
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stock-home';

  private _snackBar = inject(MatSnackBar);

  dispararMensagem(msg:string, tempo:number = 5) {
    this._snackBar.openFromComponent(MensagemComponent, {
      data: { msg },
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: tempo * 1000,
    });
  }

}
