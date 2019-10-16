import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { IEmployee } from '../employee-interface';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employees: IEmployee[];
  
  @Output() getAddFormStatus: EventEmitter<boolean> = new EventEmitter<boolean>();
  addEmpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required),
  });

  onAddEmpSubmit() {
    if (this.addEmpForm.valid) {
      this.employeeService.addEmployees(this.addEmpForm.value)
      this.addEmpForm.reset();
      this.getAddFormStatus.emit(false);
    }
  }

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) { }

  ngOnInit() {
      
  }
}
