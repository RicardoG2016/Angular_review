import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'app works!';
  test = {
    one: "uno",
    two: "due"
  };

// custom event that is triggered in root html.
yell(e){
  alert("i'm yelling");
}

}
