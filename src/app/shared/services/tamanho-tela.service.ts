import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TamanhoTelaService {
  private _tamanhoTela$ = new BehaviorSubject<number>(window.innerWidth);
  public readonly tamanhoTela$ = this._tamanhoTela$.asObservable();

  constructor(private zone: NgZone) {
    fromEvent(window, 'resize').subscribe(() => {
      this.zone.run(() => {
        this._tamanhoTela$.next(window.innerWidth);
      });
    });
  }

  get tamanhoAtual(): number {
    return this._tamanhoTela$.value;
  }
}
