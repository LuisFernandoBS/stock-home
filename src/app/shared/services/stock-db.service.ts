// src/app/shared/services/compras-db.service.ts
import { Injectable } from '@angular/core';
import { openDB, DBSchema } from 'idb';
import { Item } from '../interfaces/item.interface';

interface HistoricoDB extends DBSchema {
  lista: {
    key: string;  // chave única
    value: {
      id:string;
      itens: Item[];
      data: string;
      hora: string;
    };
  };
}

@Injectable({ providedIn: 'root' })
export class StockDbService {
  private dbName = 'stock-db';
  private storeName = 'historico';

  private dbPromise = openDB(this.dbName, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('historico')) {
        db.createObjectStore('historico', { keyPath: 'id' }); // Usa id como chave primária
      }
    },
  });

  async salvarLista(id: string, itens: Item[], data: string, hora: string): Promise<void> {
    const db = await this.dbPromise;
    const idUnico = `${id}-${Date.now()}-${crypto.randomUUID()}`;
    await db.put(this.storeName, { id: idUnico, itens, data, hora });
  }

  async obterHistorico(): Promise<{ id:string; data: string; itens: Item[]; hora:string; }[]> {
    const db = await this.dbPromise;
    return await db.getAll(this.storeName);
  }

  async obterPorData(data: string): Promise<{ id:string; data: string; itens: Item[]; hora:string; } | undefined> {
    const db = await this.dbPromise;
    return await db.get(this.storeName, data);
  }

  async resetarBanco(): Promise<void> {
    const request = indexedDB.deleteDatabase(this.dbName);
  
    request.onsuccess = () => {
      console.log(`Banco de dados ${this.dbName} deletado com sucesso.`);
    };
  
    request.onerror = (event) => {
      console.error(`Erro ao deletar o banco:`, event);
    };
  
    request.onblocked = () => {
      console.warn(`A exclusão do banco foi bloqueada. Feche outras abas.`);
    };
  }
}
