import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;
  constructor(private router:Router,private fb:FormBuilder,private http:HttpClient) {
    this.registerForm=new FormGroup({
      name:new FormControl(''),
      password:new FormControl(''),
   })
  }

  ngOnInit() {
  }
  register(a){
    let body={
      email:a.value.name,
      password:a.value.password
    }
   this.http.post('https://reqres.in/api/register',body).subscribe(res =>{
     console.log(res)
     this.router.navigateByUrl('home')
    })    
 }
}
