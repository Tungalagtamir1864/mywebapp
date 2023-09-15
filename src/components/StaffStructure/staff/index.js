// src/components/EmployeeStructure.js
import React, { Component } from "react";

class EmployeeStructure extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departments: [
        {
          name: "School of Information and Computer Science",
          employees: [
            { name: "John", role: "Administration" },
            { name: "Jane", role: "Department" },
          ],
          showInfo: false,
        },
        // Add more departments and employees as needed
      ],
    };
  }

  toggleInfo(index) {
    const departments = [...this.state.departments];
    departments[index].showInfo = !departments[index].showInfo;
    this.setState({ departments });
  }

  render() {
    return (
      <div>
        <h1>Employee Structure</h1>
        <ul>
          {this.state.departments.map((department, index) => (
            <li key={index}>
              <button onClick={() => this.toggleInfo(index)}>
                {department.name}
              </button>
              {department.showInfo && (
                <div>
                  <p>Additional Information:</p>
                  <ul>
                    {department.employees.map((employee, idx) => (
                      <li key={idx}>
                        {employee.name}: {employee.role}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default EmployeeStructure;
