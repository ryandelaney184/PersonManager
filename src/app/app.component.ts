import {Component, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Employee} from "./objects/employee";
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {EmployeeViewerComponent} from "./ui/components/employee-viewer/employee-viewer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, FormsModule, EmployeeViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  //--------------------------------
  // Attributes
  //--------------------------------
  title = 'Employee Manager';

  @Input()
  employeeViewList: Array<Employee> = new Array<Employee>();

  employeeList:Array<Employee> = new Array<Employee>();

  //--------------------------------
  // Constructor
  //--------------------------------

  /**
   * The constructor will load some default Employee into the view list.
   */
  constructor() {
    let employee1 = new Employee();
    employee1.Name = "John Doe";
    employee1.Position = "Teardown";

    let employee2: Employee = new Employee();
    employee2.Name = "Jane Doe";
    employee2.Position = "Teardown";

    let employee3: Employee = new Employee();
    employee3.Name = "Jerry Gut";
    employee3.Position = "Public Nuisance";

    this.employeeList.push(employee1, employee2, employee3);

    for (const employeeListElement of this.employeeList) {
      this.employeeViewList.push(employeeListElement);
    }
  }

  //--------------------------------
  // Methods
  //--------------------------------
  /**
   * The search method will update the list of employee that are viewed on the
   * web page. If none are found this will return a empty list, and nothing
   * should show up/
   * @param event The change event.
   */
  search(event: Event) {
    for (const employeeListElement of this.employeeList) {
     this.employeeViewList.pop();
    }

    for (const employee of this.employeeList) {

      let valEle = event.target as HTMLInputElement;

      if(employee.Name.indexOf(valEle.value) != -1 ||
        employee.Position.indexOf(valEle.value) != -1){
        this.employeeViewList.push(employee);
      }
    }
  }

}
