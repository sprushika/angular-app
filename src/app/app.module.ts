import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {SidebarModule} from 'primeng/sidebar';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
// import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
// import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HttpClientModule } from "@angular/common/http";
import { AddnEditComponent } from './addn-edit/addn-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    // EditEmployeeComponent,
    // AddEmployeeComponent,
    AddnEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
