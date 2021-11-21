import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({employees, deleteEmployee, onToggleProp}) => {
    return (
        <ul className="app-list list-group">
            {employees.map((employee) => <EmployeesListItem onToggleIncrease={() => onToggleProp(employee.id, 'increase')} onToggleRise={() => onToggleProp(employee.id, 'rise')} deleteEmployee={() => deleteEmployee(employee.id)} {...employee} key={employee.id} />)}
        </ul>
    )
}

export default EmployeesList;