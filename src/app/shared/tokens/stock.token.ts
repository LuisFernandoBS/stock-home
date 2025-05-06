import { InjectionToken } from '@angular/core';

export const FINALIZAR = new InjectionToken<() => void>('Função salvar lista de itens e finaliza');