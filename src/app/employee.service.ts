import { Injectable } from '@angular/core';
import { IEmployee } from './employee-interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {share} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeData$ : Observable<IEmployee[]>;
  employee: IEmployee[];
  private _url: string = "/assets/employee.json";
  constructor(private http: HttpClient) { 
    this.employeeData$ = this.http.get<IEmployee[]>(this._url).pipe(share());
    this.employeeData$
    .subscribe(data => {
      this.employee = data;
    });
  }

  getEmployees(): Observable<IEmployee[]> {
    return this.employeeData$;
  }
  addEmployees(emp: IEmployee) {
    this.employee.push(emp);
  }
  editEmployees(index,value) {
    this.employee[index] = value;
  }
  deleteEmp(index) {
    this.employee.splice(index, 1)
  }
}

