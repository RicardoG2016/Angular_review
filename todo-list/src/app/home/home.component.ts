import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  homeTitle = "Homepage...";
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

// input allows you to input values from other components. Test is from the root component.
  @Input() test;
// output allows info to go from home back to root component.
  @Output() onYell = new EventEmitter();

  fireYellEvent(e){
    this.onYell.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
