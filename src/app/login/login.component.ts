import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:FormGroup;
  constructor(private router:Router,private http:HttpClient ) {
    this.loginform=new FormGroup({
      name:new FormControl(''),
      password:new FormControl('')

    })
   }

  ngOnInit() {
  }
 loginpage(a){
   //let name=this.loginform.get('email').value
     // let password =this.loginform.get('password').value
     let body={
       email:a.value.name,
       password:a.value.password,
     }
     this.http.post('https://reqres.in/api/users',body).subscribe(result=> {
      console.log(result)
       //this.router.navigateByUrl("")
     })
    }
 }

