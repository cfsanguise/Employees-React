import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './app.css';

function App() {
  const [data, setData] = React.useState({
    employees: [{name: 'Gennadiy Petrukhin', salary: 300, increase: false, rise: true, id: uuidv4()},
    {name: 'Vitalya Golodniy', salary: 100, increase: true, rise: false, id: uuidv4()},
    {name: 'Lob Michalich', salary: 555, increase: false, rise: false, id: uuidv4()},],
    term: '',
    filter: 'all'
  });
  const {employees, term, filter} = data;

  const addEmployee = (name, salary) => {
    setData((state) => ({...state, employees: employees.concat([{name, salary, increase: false, rise: false, id: uuidv4()}])}))
  }

  const deleteEmployee = id => {
    setData((state) => ({...state, employees: employees.filter(employee => employee.id !== id)}))
  }

  const onToggleProp = (id, prop) => {
    setData(({employees, ...props}) => ({
      employees: employees.map(employee => {
        if (employee.id == id) {
          return {...employee, [prop]: !employee[prop]}
        }
        return employee;
      })
    , ...props})) 
  }

  const searchEmployee = (items, term) => {
    if (term.length === 0) {
      return items;
    } 

    return items.filter(item => {
      return item.name.indexOf(term) > -1;
    })
  }

  const setTerm = text => {
    setData(state => ({...state, term: text}));
  }

  const setFilter = text => {
    setData(state => ({...state, filter: text}));
  }

  const filterEmployees = (items, filter) => {
    const filtered = items.filter(item => {
      switch (filter) {
        case 'all': 
          return items
        case 'rise':
          return item.increase === true
        case 'bigSalary':
          return item.salary > 1000
        default: return items
      }
    })
    console.log(items);
    return filtered
  }

  let visibleData = filterEmployees(searchEmployee(employees, term), filter);


  return (
    <div className="app">
        <AppInfo employees={employees} />

        <div className="search-panel">
            <SearchPanel term={term} setTerm={setTerm} />
            <AppFilter setFilter={setFilter} />
        </div>
        
        <EmployeesList onToggleProp={onToggleProp} employees={visibleData} deleteEmployee={deleteEmployee} />
        <EmployeesAddForm addEmployee={addEmployee} />
    </div>
  );
}

export default App;
