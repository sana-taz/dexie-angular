import { Component, Input, OnInit } from '@angular/core';
import { db } from 'src/db/db';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Input() receiver: any;
  item: any;
  constructor() {}

  ngOnInit(): void {
    this.item = this.receiver;
  }

  update(item: any) {
    db.todos.update(item.id, {
      title: 'updated the item',
    });
    item = db.todos.where('id').equals(item.id);
  }
}
