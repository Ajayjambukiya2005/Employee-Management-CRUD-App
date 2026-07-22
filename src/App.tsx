import { useMemo, useState } from "react";
import { useEmployees } from "./hooks/useEmployees";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeForm from "./components/EmployeeForm";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import type { Employee, EmployeeFormData } from "./types/Employee";

function App() {
  const { employees, addEmployee, updateEmployee, deleteEmployee } = useEmployees();
  const [showForm, setShowForm] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
  const [deletingEmployee, setDeletingEmployee] = useState<Employee | null>(null);
  const [search, setSearch] = useState("");

  const filteredEmployees = useMemo(() => {
    const term = search.trim().toLowerCase();
    if (!term) return employees;
    return employees.filter(
      (emp) =>
        emp.name.toLowerCase().includes(term) ||
        emp.email.toLowerCase().includes(term) ||
        emp.department.toLowerCase().includes(term) ||
        emp.position.toLowerCase().includes(term)
    );
  }, [employees, search]);

  function handleOpenAdd() {
    setEditingEmployee(null);
    setShowForm(true);
  }

  function handleOpenEdit(employee: Employee) {
    setEditingEmployee(employee);
    setShowForm(true);
  }

  function handleSave(data: EmployeeFormData) {
    if (editingEmployee) {
      updateEmployee(editingEmployee.id, data);
    } else {
      addEmployee(data);
    }
    setShowForm(false);
    setEditingEmployee(null);
  }

  function handleConfirmDelete() {
    if (deletingEmployee) {
      deleteEmployee(deletingEmployee.id);
      setDeletingEmployee(null);
    }
  }

  return (
    <div className="min-vh-100 bg-light">
      <nav className="navbar navbar-dark bg-primary mb-4 shadow-sm">
        <div className="container">
          <span className="navbar-brand mb-0 h1">Employee Management (CRUD)</span>
        </div>
      </nav>

      <div className="container pb-5">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-2">
          <input
            type="text"
            className="form-control"
            style={{ maxWidth: "320px" }}
            placeholder="Search by name, email, department..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleOpenAdd}>
            + Add Employee
          </button>
        </div>

        <p className="text-muted">
          Total records: <strong>{filteredEmployees.length}</strong>
        </p>

        <EmployeeTable
          employees={filteredEmployees}
          onEdit={handleOpenEdit}
          onDelete={(emp) => setDeletingEmployee(emp)}
        />
      </div>

      <EmployeeForm
        show={showForm}
        onClose={() => {
          setShowForm(false);
          setEditingEmployee(null);
        }}
        onSave={handleSave}
        editingEmployee={editingEmployee}
      />

      <ConfirmDeleteModal
        employee={deletingEmployee}
        onCancel={() => setDeletingEmployee(null)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}

export default App;
