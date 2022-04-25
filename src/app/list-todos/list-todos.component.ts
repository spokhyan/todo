import { Component, OnInit } from '@angular/core';

export class Todo {

  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){

  }
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn Terraform', false, new Date()),
    new Todo(2, 'Explore NY Upstate', false, new Date()),
    new Todo(3, 'India Travel', false, new Date())
    // {id: 1, description: 'Learn Terraform'},
    // {id: 2, description: 'Explore NY Upstate'},
    // {id: 3, description: 'India Travel' }
  ]

  // todo = {
  //   id: 1,
  //   description: 'Learn Terraform'
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
