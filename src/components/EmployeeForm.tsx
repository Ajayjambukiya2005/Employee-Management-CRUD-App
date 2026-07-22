import { useEffect, useState } from "react";
import type { Employee, EmployeeFormData } from "../types/Employee";

interface Props {
  show: boolean;
  onClose: () => void;
  onSave: (data: EmployeeFormData) => void;
  editingEmployee: Employee | null;
}

const emptyForm: EmployeeFormData = {
  name: "",
  email: "",
  department: "",
  position: "",
  salary: 0,
};

const DEPARTMENTS = ["Engineering", "Human Resources", "Sales", "Marketing", "Finance"];

export default function EmployeeForm({ show, onClose, onSave, editingEmployee }: Props) {
  const [form, setForm] = useState<EmployeeFormData>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof EmployeeFormData, string>>>({});

  useEffect(() => {
    if (editingEmployee) {
      const { id, ...rest } = editingEmployee;
      void id;
      setForm(rest);
    } else {
      setForm(emptyForm);
    }
    setErrors({});
  }, [editingEmployee, show]);

  if (!show) return null;

  function validate(): boolean {
    const next: Partial<Record<keyof EmployeeFormData, string>> = {};
    if (!form.name.trim()) next.name = "Name is required.";
    if (!form.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!form.department) next.department = "Select a department.";
    if (!form.position.trim()) next.position = "Position is required.";
    if (form.salary <= 0) next.salary = "Salary must be greater than 0.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    onSave(form);
  }

  return (
    <div
      className="modal d-block"
      tabIndex={-1}
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <form onSubmit={handleSubmit} noValidate>
            <div className="modal-header">
              <h5 className="modal-title">
                {editingEmployee ? "Edit Employee" : "Add New Employee"}
              </h5>
              <button type="button" className="btn-close" onClick={onClose} aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. Aarav Patel"
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="e.g. aarav@example.com"
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Department</label>
                <select
                  className={`form-select ${errors.department ? "is-invalid" : ""}`}
                  value={form.department}
                  onChange={(e) => setForm({ ...form, department: e.target.value })}
                >
                  <option value="">Choose department...</option>
                  {DEPARTMENTS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
                {errors.department && <div className="invalid-feedback">{errors.department}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Position</label>
                <input
                  type="text"
                  className={`form-control ${errors.position ? "is-invalid" : ""}`}
                  value={form.position}
                  onChange={(e) => setForm({ ...form, position: e.target.value })}
                  placeholder="e.g. Frontend Developer"
                />
                {errors.position && <div className="invalid-feedback">{errors.position}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Salary (₹)</label>
                <input
                  type="number"
                  className={`form-control ${errors.salary ? "is-invalid" : ""}`}
                  value={form.salary}
                  onChange={(e) => setForm({ ...form, salary: Number(e.target.value) })}
                  placeholder="e.g. 50000"
                  min={0}
                />
                {errors.salary && <div className="invalid-feedback">{errors.salary}</div>}
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                {editingEmployee ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
