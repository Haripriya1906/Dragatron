import { async, ComponentFixture, TestBed } from '@angular/core/testing';
 
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { EmployeeListComponent } from './employee-list.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,ReactiveFormsModule
      ],
      declarations: [ EmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
