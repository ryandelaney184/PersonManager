import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {

    let employee: Employee = new Employee();
    employee.Name = "John Doe";
    employee.Position = "Teardown";

    expect(employee).toBeTruthy();
  });
});
