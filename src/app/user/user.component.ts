import { Component, Input, OnInit } from '@angular/core';
import { db } from 'src/db/db';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  item: any;
  id: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.get('id') !== null) {
        this.id = params.get('id');
        this.currentItem(+this.id);
      }
    });
  }
  async currentItem(id: any) {
    await db.todos
      .where('id')
      .equals(id)
      .toArray()
      .then((data) => {
        this.item = data[0];
      });
  }
}
