import Dexie, { Table } from 'dexie';
export interface ITodos {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
}
export class AppDB extends Dexie {
  todos!: Table<ITodos[], string>;
  constructor() {
    super('ngdexieliveQuery');
    this.version(1).stores({
      todos: 'id',
    });
  }
}

export const db = new AppDB();
