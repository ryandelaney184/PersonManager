import {Component, Input} from '@angular/core';
import {Employee} from "../../../objects/employee";

@Component({
  selector: 'employee-viewer',
  standalone: true,
  imports: [],
  templateUrl: './employee-viewer.component.html',
  styleUrl: './employee-viewer.component.css'
})
export class EmployeeViewerComponent {

  //--------------------------------
  // Attributes
  //--------------------------------

  @Input()
  employee: Employee = new Employee();

}
