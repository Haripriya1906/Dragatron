import { Component, OnInit } from '@angular/core';
import { Item } from '../entity/item';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  previewPhoto = false;
  itemname:string;
  itemimage:string;
  itemprice: number;
  itemdescription:string;
  itemadddate:Date;
  item: Item;
  
  constructor(private employeeService: EmployeeService, private router: Router) { }

  togglePhotoPreview() {
this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
  }
  saveItem(){
    this.item = new Item(this.makeRandomID(), this.itemname, this.itemimage, this.itemprice ,this.itemdescription, this.itemadddate);
    this.employeeService.addItem(this.item);
    this.router.navigate(["Items"]);
  }
 
  cancelEmployee(){
    this.router.navigate(["Items"]);
  }
 makeRandomID(): string {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
