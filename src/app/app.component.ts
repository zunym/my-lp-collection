import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My LP Collection';

  // rating = [1,2,3,4,5,6,7,8,9,10];
    //save data
    albumList : string[] = [];
    @Output()
    returnItem = new EventEmitter<string>();
  
    //only add exist, not add if not exist
    newItem(item: string){
      
      //console.log('>>> in')
      for(let i in this.albumList){
        //console.log('>>> in: ',this.shoppingList[i])
  
        //duplicate detect
        if(item == this.albumList[i])
        return;
      }
      //console.log('>>> of')
      for(let i of this.albumList){
       // console.log('>>> of: ',this.shoppingList[i])
      }
  
      console.log(">>>>new items: ", item);
      this.albumList.push(item);
    }
  
    deleteItem(item:string){
      console.log("deleting items: ", item);
      this.returnItem.next(item);
    }

}
