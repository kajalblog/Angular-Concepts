import { Injectable } from '@angular/core';
import {AngularFireAuth}from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth:AngularFireAuth,private router:Router) { }
  // login code 
  login(email:string,password:string)
  {
    this.fireAuth.signInWithEmailAndPassword(email,password).then( ()=>{
      localStorage.setItem('token','true');
      this.router.navigate(['/dashboard'])

    },err=>{
      alert(err.message);
      this.router.navigate(['/login']);

    })
  }
  // register code
  register(email:string,password:string)
  {
    this.fireAuth.createUserWithEmailAndPassword(email,password).then( ()=>{
      // alert("Registration Successfully....");
      this.logOut();
      this.router.navigate(['/login']);

    },err =>{
      alert(err.message);
      this.router.navigate(['/register']);

    })
  }
  // log Out code
  logOut()
  {
    this.fireAuth.signOut().then( ()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    },err =>{
      alert(err.message);

    })
  }
}
