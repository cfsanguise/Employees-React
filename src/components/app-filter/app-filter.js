import React from "react";
import "./app-filter.css";

const AppFilter = ({setFilter}) => {
    const [filter, setLocalFilter] = React.useState('all');

    const handleClick = (e) => {
        const fl = e.target.getAttribute('data-filter');
        setLocalFilter(fl);
        setFilter(fl);
    }

    return (
        <div className="btn-group">
            <button type="button"
                    className={`btn ${filter === 'all' ? 'btn-light': 'btn-outline-light'}`}
                    data-filter='all'
                    onClick={handleClick}>
                    Все сотрудники
            </button>
            <button type="button"
                    className={`btn ${filter === 'rise' ? 'btn-light': 'btn-outline-light'}`}
                    onClick={handleClick} data-filter='rise'>
                    На повышение
            </button>
            <button type="button"
                    className={`btn ${filter === 'bigSalary' ? 'btn-light': 'btn-outline-light'}`}
                    onClick={handleClick} data-filter='bigSalary'>
                    З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;