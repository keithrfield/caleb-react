import './index.css';
import Employee from './components/Employee'
import {useState} from 'react';

function App() {
  const showEmployees = true;
  const [role, setRole] = useState('Dev');
  return (
    <div className="App bg-cyan-300" >
      {showEmployees ? 
        <>
        <input type="text" onChange={(e) => {
            console.log(e.target.value);
            setRole(e.target.value);
        }}  />
          <Employee name="Bill" role="Intern" />
          <Employee name="Keith" role={role}/>
          <Employee name="Jill" />
        </>
        :
          <p>You are not permitted to see the employees</p>
        
      }
    </div>
  );
}

export default App;
