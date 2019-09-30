import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskForm:FormGroup;
  record
  constructor(private http:HttpClient) { 
    this.taskForm=new FormGroup({
      userId:new FormControl(''),
      id:new FormControl(''),
      title:new FormControl(''),
      completed:new FormControl('')
    })
  }
   
  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(data=>{
      this.record=data
     // console.log(data)
    })
  }
  task1(v){
    let name={
      userId:v.value.userId,
      id:v.value.id,
      title:v.value.title,
      completed:v.value.completed
    }
    this.http.post('https://jsonplaceholder.typicode.com/todos',name).subscribe(data=>{
      this.record=data
      console.log(data)
    })
  }
}
