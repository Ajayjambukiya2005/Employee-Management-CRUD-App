import { useEffect, useState, useCallback } from "react";
import type { Employee, EmployeeFormData } from "../types/Employee";

const STORAGE_KEY = "crud_employees_v1";

const seedData: Employee[] = [
  {
    id: crypto.randomUUID(),
    name: "Aarav Patel",
    email: "aarav.patel@example.com",
    department: "Engineering",
    position: "Frontend Developer",
    salary: 55000,
  },
  {
    id: crypto.randomUUID(),
    name: "Diya Shah",
    email: "diya.shah@example.com",
    department: "Human Resources",
    position: "HR Manager",
    salary: 48000,
  },
  {
    id: crypto.randomUUID(),
    name: "Kabir Mehta",
    email: "kabir.mehta@example.com",
    department: "Sales",
    position: "Sales Executive",
    salary: 42000,
  },
];

function loadFromStorage(): Employee[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return seedData;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed;
    return seedData;
  } catch {
    return seedData;
  }
}

export function useEmployees() {
  const [employees, setEmployees] = useState<Employee[]>(() => loadFromStorage());

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
  }, [employees]);

  const addEmployee = useCallback((data: EmployeeFormData) => {
    const newEmployee: Employee = { id: crypto.randomUUID(), ...data };
    setEmployees((prev) => [newEmployee, ...prev]);
  }, []);

  const updateEmployee = useCallback((id: string, data: EmployeeFormData) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === id ? { id, ...data } : emp))
    );
  }, []);

  const deleteEmployee = useCallback((id: string) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  }, []);

  return { employees, addEmployee, updateEmployee, deleteEmployee };
}
