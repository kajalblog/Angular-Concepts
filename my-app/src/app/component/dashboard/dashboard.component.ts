import { Component, OnInit } from '@angular/core';
import {AngularFireAuth}from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  [x: string]: any;

  constructor( private auth:AngularFireAuth ,private router:Router) { }

  ngOnInit(): void {
  }
  logOut()
  {
    this.auth.signOut();
    this.router.navigate(['/login']);
  }

}
