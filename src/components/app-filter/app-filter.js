import React from "react";
import "./app-filter.css";

const AppFilter = ({setFilter}) => {

    const handleClick = (e) => {
        const fl = e.target.getAttribute('data-filter');
        setFilter(fl);
    }

    return (
        <div className="btn-group">
            <button type="button"
                    className="btn btn-light">
                    Все сотрудники
            </button>
            <button type="button"
                    className="btn btn-outline-light"
                    onClick={handleClick} data-filter='increase'>
                    На повышение
            </button>
            <button type="button"
                    className="btn btn-outline-light"
                    onClick={handleClick} data-filter='dengi'>
                    З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;