export interface Employee {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  salary: number;
}

export type EmployeeFormData = Omit<Employee, "id">;
