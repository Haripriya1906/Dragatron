import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../entity/item';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

 

  ngOnInit() {
  }
 
@Input() item: Item;

 
@Output() refreshEmployeeList: EventEmitter<boolean> = new EventEmitter<boolean>();

 
constructor(private employeeService: EmployeeService, private router: Router) { 
}

deleteItem(employeeToBeDeleted: Item){
  var result = confirm("Are you sure, you want to delete this Employee?");
  if (result) {
    this.employeeService.deleteItem(this.item.id);
    this.refreshEmployeeList.emit(true);
    this.router.navigate(["Items"]);
  } 
}
}
