import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {

    let Andrew: Employee = new Employee();
    Andrew.Name = "John Doe";
    Andrew.Position = "Teardown";

    expect(Andrew).toBeTruthy();
  });
});
