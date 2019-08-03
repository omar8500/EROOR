import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

userName:string;
password:string;


  constructor(private route: Router)
  {
    console.log("i am constructor ");
    
  } 

  ngOnInit() {
  }

}
