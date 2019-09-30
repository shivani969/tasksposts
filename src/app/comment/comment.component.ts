import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  data:any
comp=[]
  tdata;
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.data=JSON.parse(localStorage.getItem('post'))
    console.log(this.data)
    this.http.get('https://jsonplaceholder.typicode.com/comments').subscribe(data=>{
      console.log(data)
      this.tdata=data
    })
    setTimeout(()=>{
      this.go();
    },2000)
  }
  go(){
    for(var i=0;i<this.tdata.length;i++){
      if(this.data.userId==this.tdata[i].postId){
        this.comp.push(this.tdata[i])
      }
    }
    console.log(this.comp)
  }
}
