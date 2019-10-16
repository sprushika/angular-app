import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { IEmployee } from '../employee-interface';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-addn-edit',
  templateUrl: './addn-edit.component.html',
  styleUrls: ['./addn-edit.component.scss']
})
export class AddnEditComponent implements OnInit {
  employees: IEmployee[];
  employeeData$ : Observable<IEmployee[]>;
  @Output() getAddFormStatus: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() getData: {index: number, data: IEmployee};
  @Input() mode:string;
  @Output() getEditFormStatus: EventEmitter<boolean> = new EventEmitter<boolean>();
  empForm: FormGroup;

  onSubmit() {
    if (this.mode==="add" && this.empForm.valid) {
      this.employeeService.addEmployees(this.empForm.value);
      this.empForm.reset();
      this.getAddFormStatus.emit(false);
    } else if(this.mode === "edit" && this.empForm.valid) {
      this.employeeService.editEmployees(this.getData.index, this.empForm.value);
      this.employeeData$[this.getData.index] = this.empForm.value;
      this.getEditFormStatus.emit(false);
    }
  }

  get userName() {
    return this.empForm.get('name');
  }

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) { }
  
  ngOnInit() {
    this.employeeData$ = this.employeeService.getEmployees();
    //Add form
    if(this.mode === "add") {
      this.empForm = this.fb.group({
        name: ['',Validators.required,],
        gender: ['',Validators.required],
        role: ['',Validators.required],
      });
    }
  }
  ngOnChanges() {
    //Edit form
    if(this.mode === "edit") {
      this.empForm = this.fb.group({
        name: [this.getData.data.name,[Validators.required, Validators.minLength(3)]],
        gender: [this.getData.data.gender, Validators.required],
        role: [this.getData.data.role, Validators.required],
      });
    }
  }
}
