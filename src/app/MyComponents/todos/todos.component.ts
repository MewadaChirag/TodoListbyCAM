import { Component, OnInit,EventEmitter } from '@angular/core';
import {Todo} from "../../Todo";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
localItem: string | null;
 todos!: Todo[];
  constructor() {
    this.localItem = localStorage.getItem("todos") ;
    if(this.localItem == null){
    this.todos = [ ];
    }
    else {
      this.todos = JSON.parse(this.localItem);
    }
   }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
  console.log(todo);
  const Index = this.todos.indexOf(todo);
  this.todos.splice(Index,1)
  localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
    }
  toggleTodo(todo: Todo){
      const Index = this.todos.indexOf(todo);
      this.todos[Index].active = !this.todos[Index].active;
      localStorage.setItem("todos",JSON.stringify(this.todos));
      }
}
