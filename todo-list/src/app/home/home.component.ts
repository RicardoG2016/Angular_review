import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to the homepage...";
  myString = "binded data"
  
  // event binding ex
  alertMe(){
    alert('Event is binded');
  }

  // two way binding
  car = {
    model: "Honda",
    color: "Black"
  };


  constructor() { }

  ngOnInit() {
  }

}
