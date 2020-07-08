import { Component, OnInit } from '@angular/core';
import { Item } from '../entity/item';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  _listFilterBy: string;
  allItems: Item[];
  filteredList: Item[];
 
  constructor(private employeeService:EmployeeService, private router: Router) { }
 
  get listFilterBy(): string {
    return this._listFilterBy;
  } 
  set listFilterBy(value: string) {
    this._listFilterBy = value;
    this.filteredList = this._listFilterBy ? this.performFilter(this._listFilterBy) : this.allItems;
  } 
  performFilter(filterBy: string): Item[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.allItems.filter((item: Item) => item.itemname.toLocaleLowerCase().indexOf(filterBy) !== -1 ||
     item.itemimage.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
 
  ngOnInit() {
    this.allItems = this.employeeService.getAllItems();
    this.filteredList = this.allItems;
    this._listFilterBy = "";
  } 
  // addEmployee(){
  //   this.router.navigate(["AddEmployee"]);
  // } 
  refreshList(){
    this.allItems = this.employeeService.getAllItems();
    this.filteredList = this.allItems;
  }
}
