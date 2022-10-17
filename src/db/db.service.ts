import { Injectable } from '@angular/core';
import { db } from './db';
@Injectable({
  providedIn: 'root',
})
export class DexieService {
  getAllTodos() {
    let todos;
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => {
        todos = json;
        console.log('json', json);
        return db.todos.bulkPut(todos);
      });
  }
}
