import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Todo} from 'src/app/Todo';


@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent implements OnInit {
  @Input()
  todo!: Todo;
  @Input()
  i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    }
    onClick(todo: Todo){
      this.todoDelete.emit(todo);
      console.log("Onclick has been triggered")
    }
    onCheckboxClick(todo: Todo){
      this.todoCheckbox.emit(todo);
    }

}
