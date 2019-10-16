import { Component, OnInit, OnChanges, Output, Input, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { IEmployee } from '../employee-interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  employeeData$ : Observable<IEmployee[]>;
  @Input() getData: {index: number, data: IEmployee};
  @Output() getEditFormStatus: EventEmitter<boolean> = new EventEmitter<boolean>();
  editEmpForm: FormGroup;
  
  onEditEmpSubmit() {
    if (this.editEmpForm.valid) {
      this.employeeService.editEmployees(this.getData.index, this.editEmpForm.value);
      this.employeeData$[this.getData.index] = this.editEmpForm.value;
      this.getEditFormStatus.emit(false);
    }
  }
  constructor(private fb:FormBuilder ,private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeData$ = this.employeeService.getEmployees();
    
  }
  ngOnChanges() {
    this.editEmpForm = this.fb.group({
      name: [this.getData.data.name,Validators.required],
      gender: [this.getData.data.gender, Validators.required],
      role: [this.getData.data.role, Validators.required],
    });
  }
  // () {
  //   this.editEmpForm = this.fb.group({
  //     name: [this.getData.data.name,Validators.required],
  //     gender: [this.getData.data.gender, Validators.required],
  //     role: [this.getData.data.role, Validators.required],
  //   });
  // }
}
