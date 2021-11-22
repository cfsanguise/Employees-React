import React from 'react';
import './employees-add-form.scss';

class EmployeesAddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addEmployee = e => {
        e.preventDefault();
        if (this.state.name !== '' && this.state.salary !== '') {
            this.props.addEmployee(this.state.name, this.state.salary);
        } else {
            alert('Введите имя и зарплату')
        } 
    }

    
    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form onSubmit={this.addEmployee}
                    className="add-form d-flex">
                    <input onChange={this.onValueChange} type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" name='name' value={name} />

                    <input onChange={this.onValueChange} type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" name='salary' value={salary} />
                        
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;