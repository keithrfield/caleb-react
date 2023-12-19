import './index.css';
import Employee from './components/Employee'
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid'

function App() {
  const showEmployees = true;
  const [employees, setEmployees] = useState(
    [
      {
        name: "Sam", 
        role: "CEO",
        img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
      },{
        name: "Nancy", 
        role: "Help Desk Associate",
        img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
      },
      {
        name: "Bill", 
        role: "Sales Associate",
        img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
      },
      {
        name: "Debra", 
        role: "Accountant",
        img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg"
      },
      {
        name: "Keith", 
        role: "Developer",
        img: "https://images.pexels.com/photos/316680/pexels-photo-316680.jpeg"
      },
      {
        name: "Don", 
        role: "Manager",
        img: "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg"
      },
      {
        name: "Valerie", 
        role: "Software Engineer",
        img: "https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg"
      },
    ]
  );
  return (
    <div className="App" >
      {showEmployees ? 
        <>
        
          <div className="flex flex-wrap justify-center">
          {employees.map((employee) => {              
              return(
                <Employee
                  key={uuidv4()}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />)
          })}   
          </div>
        </>
        :
          <p>You are not permitted to see the employees</p>
        
      }
    </div>
  );
}

export default App;
