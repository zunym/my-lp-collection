import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lp';

  lpList:string[] = [];

  itemAdded(item:string) {
    console.log('>>>> new item: ', item);
    this.lpList.push(item);
  }
}