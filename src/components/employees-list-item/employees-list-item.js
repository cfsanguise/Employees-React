import React from 'react';
import './employees-list-item.css';

const EmployeesListItem = props => {

    const {name, salary, onToggleIncrease, onToggleRise, deleteEmployee, increase, rise} = props;

    let classes = "list-group-item d-flex justify-content-between";
    if (increase === true) {
        classes += ' increase';
    }
    if (rise === true) {
        classes += ' like';
    }
    return (
        <li className={classes} tabIndex='0'>
            <span onClick={onToggleRise} tabIndex='0' className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={onToggleIncrease} type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button onClick={deleteEmployee} type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;