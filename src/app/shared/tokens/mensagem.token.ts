// shared/tokens.ts
import { InjectionToken } from '@angular/core';

export const DISPARAR_MSG = new InjectionToken<(msg: string,tempo?:number) => void>('Função para disparar mensagem');
