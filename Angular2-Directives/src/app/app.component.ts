import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app works!';

  myangle;// = "145";

  ngOnInit(): void {
    this.myangle = "145";    
  }
}
