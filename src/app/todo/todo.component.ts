import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  item : Todo = new Todo();
  list = [];

  constructor() { }

  ngOnInit() {
  }

  addTodo(){
    console.log(this.list)
    if(this.item.content &&this.item.content != ''){
      this.list.push(this.item)
      console.log(this.list)
      this.item = new Todo()
    }
  }
  done(i){
    this.list[i].isDone = true;
  }
  remove(i){
    this.list[i].isRemoved = true;
  }

}
