import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { IEmployee } from './employee-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  employee:IEmployee[] = [];
  constructor(
    // private employeeService: EmployeeService,
  ) {}
  ngOnInit() {
    // this.employeeService.getEmployees()
    //   .subscribe(data => {
    //     console.log(data);
    //     this.employee = data});
  }
}
