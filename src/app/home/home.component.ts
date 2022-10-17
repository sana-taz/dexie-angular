import { TemplateBindingParseResult } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { db } from 'src/db/db';
import { DexieService } from 'src/db/db.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  todos: any;
  selectedReceiver: any;
  showUser: boolean = false;
  showUserList: boolean = true;
  constructor(private ds: DexieService) {}

  ngOnInit(): void {
    this.ds.getAllTodos();
    this.getData();
  }
  getData() {
    db.todos.toArray().then((data) => (this.todos = data));
  }
  selectUser(data: any) {
    this.selectedReceiver = data;
    this.showUser = true;
    this.showUserList = false;
  }
}
