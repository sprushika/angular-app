import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee-interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees$: Observable<IEmployee[]>;
  visibleAddSidebar: boolean = false;
  visibleEditSidebar: boolean = false;
  sendCurrentData: {index: number, data: IEmployee};

  constructor(private employeeService: EmployeeService) {
    this.employees$ = this.employeeService.getEmployees();
  }

  addEmployee() {
    this.visibleAddSidebar = true;
  };
  editEmp(i, emp) {
    this.visibleEditSidebar = true;
    this.sendCurrentData = {index: i, data: emp};
  };
  setAddSidebarVisibility(value) {
    this.visibleAddSidebar = value;
  }
  setEditSidebarVisibility(value) {
    this.visibleEditSidebar = value;
  }
  deleteEmp(index) {
    this.employeeService.deleteEmp(index);
  }
  onCloseAddEmp() {
    this.visibleAddSidebar = false;
  }
  onCloseEditEmp() {
    this.visibleEditSidebar = false;
  }
  ngOnInit() {
  }

}
