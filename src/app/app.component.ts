import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-unit';
  isSubmitted = false;
  data = null;
  constructor(private appService: AppService,
  ) {

  }

  ngOnInit() {

  }

  onSubmit() {
    this.add(1, 1);
    this.subtract(2, 1);
    this.isSubmitted = true;
  }

  add(a: number, b: number) {
    return a + b;
  }

  subtract(a: number, b: number) {
    return a - b;
  }

  someBusiness() {
    this.data = this.appService.get();
  }
}
