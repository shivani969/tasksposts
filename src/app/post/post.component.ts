import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post1: any;

  
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data=>{
      this.post1=data
      console.log(data)    
    })
  }
  p1(a){
    localStorage.setItem('post',JSON.stringify(a))
    this.router.navigateByUrl('comment')
  }
}
