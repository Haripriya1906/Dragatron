import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 
import { EmployeedetailComponent } from './employeedetail.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
describe('EmployeedetailComponent', () => {
  let component: EmployeedetailComponent;
  let fixture: ComponentFixture<EmployeedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule,FormsModule,ReactiveFormsModule],
      declarations: [ EmployeedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
