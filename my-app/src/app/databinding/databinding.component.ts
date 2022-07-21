import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  myName:string="Kajal"
  myMethod()
  {
    return 'Myname is ' +this.myName;
  }
  status:boolean=false;
  status1:string="Online";
  status2:string="Offline";

}
