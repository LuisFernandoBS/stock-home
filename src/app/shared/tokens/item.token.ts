// shared/tokens.ts
import { InjectionToken } from '@angular/core';
import { Item } from '../../shared/interfaces/item.interface';

export const DELETAR_ITEM = new InjectionToken<(index: number) => void>('Função para deletar item');

export const ALTERAR_STATUS_ITEM = new InjectionToken<(index: number) => void>('Função para alterar status do item');

export const SALVAR_ITEM = new InjectionToken<(item: Item) => void>('Função para salvar o item');
