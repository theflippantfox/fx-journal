import Dexie, { type Table } from 'dexie';

export interface Trade {
  id?: number;
  pair: string;
  profit: string;
}

export class MySubClassedDexie extends Dexie {
  friends!: Table<Trade>; 

  constructor() {
    super('trades');
    this.version(1).stores({
      friends: '++id, name, age' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();