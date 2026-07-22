import type { Employee } from "../types/Employee";

interface Props {
  employees: Employee[];
  onEdit: (employee: Employee) => void;
  onDelete: (employee: Employee) => void;
}

export default function EmployeeTable({ employees, onEdit, onDelete }: Props) {
  if (employees.length === 0) {
    return (
      <div className="text-center text-muted py-5 border rounded bg-light">
        <p className="mb-0 fs-5">No employees found.</p>
        <p className="mb-0">Click "Add Employee" to create your first record.</p>
      </div>
    );
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover align-middle bg-white shadow-sm">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Position</th>
            <th className="text-end">Salary (₹)</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, idx) => (
            <tr key={emp.id}>
              <td>{idx + 1}</td>
              <td className="fw-semibold">{emp.name}</td>
              <td>{emp.email}</td>
              <td>
                <span className="badge text-bg-info">{emp.department}</span>
              </td>
              <td>{emp.position}</td>
              <td className="text-end">{emp.salary.toLocaleString("en-IN")}</td>
              <td className="text-center">
                <button
                  className="btn btn-sm btn-outline-primary me-2"
                  onClick={() => onEdit(emp)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => onDelete(emp)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
