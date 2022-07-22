import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/shared/auth.service';
import {AngularFireAuth}from '@angular/fire/compat/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import {auth} from '@angular/fire/app'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registerForm!: FormGroup;
  email :string='';
  password:string='';

  constructor(private fb:FormBuilder, private auth:AngularFireAuth,private router:Router) { }

  ngOnInit(): void {
    this.registerForm=this.fb.group({
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }
  
  login()
  {
    const {email,password}=this.registerForm.value;
    if(email=='')
    {
      alert("Please Enter Email");
      return;
    }
    if(password=='')
    {
      alert("Please Enter Password");
      return;
    }
    // this.auth(this.email,this.password);
    // alert("Login Successfully")
    // this.email='';
    // this.password='';
    this.auth.signInWithEmailAndPassword(email,password).then(user=>{
      console.log("Login successfully",user);
      this.router.navigate(['/dashboard']);
    },err=>{
      alert(err);
      console.log(err);
    })
  }

}
