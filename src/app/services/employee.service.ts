import { Injectable } from '@angular/core';
import { Item } from '../entity/item';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  allItems:Item[] = [
    
  ];

  
  getAllItems():Item[]{
    return this.allItems;
  }
 
  addItem(item:Item){
    this.allItems.push(item);
  }

  deleteItem(id:string){
    this.allItems = this.allItems.filter(item => item.id != id);
  }

 
}
