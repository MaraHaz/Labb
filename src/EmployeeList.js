import { useEffect, useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
  const [employees, setEmployees] = useState([
    {
      name: "Mara Hazbei",
      email: "mara.hazbei@learnet.se",
      phone: "0700555555",
      skills: "java",
      avatar: "https://i.imgur.com/ebHfuth.png",
    },
    {
      name: "Sofie Nilsson",
      email: "sofie.nilsson@learnet.se",
      phone: "0700110011",
      skills: "reading",
      avatar: "https://i.imgur.com/TUhCrsY.png",
    },
    {
        name: "Simon Malmren",
        email: "simon.malmgren@learnet.se",
        phone: "0700220022",
        skills: "python",
        avatar: "https://i.imgur.com/Q9qFt3m.png",
      },
  ]);

  function handleAddNewEmp() {
    setEmployees((prevState) => {
      return [
          ...prevState,
        {
          name: "Daniel Berg",
          email: "daniel.berg@learnet.se",
          phone: "0700330033",
          skills: "C++",
          avatar: "https://i.imgur.com/t9HFQvX.png",
        },
      ];
    });
  }
  return (
    <div>
      <h3>EmployeeList</h3>
      <button onClick={handleAddNewEmp} className="button">Add employee </button>
      {employees.map((employee) => (
        <Employee EmployeeData={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
