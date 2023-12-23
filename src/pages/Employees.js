import "../index.css";
import Employee from "../components/Employee";
import AddEmployee from "../components/addEmployee";
import EditEmployee from "../components/EditEmployee";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Employees() {
  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id === employee.id) {
        return { ...employee, name: newName, role: newRole };
      }

      return employee;
    });
    setEmployees(updatedEmployees);
  }

  function newEmployee(name, role, imgUrl) {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: imgUrl,
    };
    setEmployees([...employees, newEmployee]);
  }
  const showEmployees = true;
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Sam",
      role: "CEO",
      img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    },
    {
      id: 2,
      name: "Nancy",
      role: "Help Desk Associate",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    },
    {
      id: 3,
      name: "Bill",
      role: "Sales Associate",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
    },
    {
      id: 4,
      name: "Debra",
      role: "Accountant",
      img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg",
    },
    {
      id: 5,
      name: "Keith",
      role: "Developer",
      img: "https://images.pexels.com/photos/316680/pexels-photo-316680.jpeg",
    },
    {
      id: 6,
      name: "Don",
      role: "Manager",
      img: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg",
    },
    {
      id: 7,
      name: "Valerie",
      role: "Software Engineer",
      img: "https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg",
    },
  ]);
  return (
    <div className="">
      {showEmployees ? (
        <>
          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              const editEmployee = (
                <EditEmployee
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  updateEmployee={updateEmployee}
                />
              );
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  editEmployee={editEmployee}
                />
              );
            })}
          </div>
          <AddEmployee newEmployee={newEmployee} />
        </>
      ) : (
        <p>You are not permitted to see the employees</p>
      )}
    </div>
  );
}

export default Employees;
