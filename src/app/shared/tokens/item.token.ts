// shared/tokens.ts
import { InjectionToken } from '@angular/core';

export const DELETAR_ITEM = new InjectionToken<(index: number) => void>('Função para deletar item');
