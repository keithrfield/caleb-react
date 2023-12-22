import "./index.css";
import Employee from "./components/Employee";
import AddEmployee from "./components/addEmployee";
import EditEmployee from "./components/EditEmployee";
import Header from "./components/Header";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Employees from "./pages/Employees";

function App() {
  return (
    <Header>
      <Employees />
    </Header>
  );
}

export default App;
