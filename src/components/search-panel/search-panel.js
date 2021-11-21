import React from 'react';
import './search-panel.css';

const SearchPanel = ({term, setTerm}) => {
    const [value, setValue] = React.useState('');

    const handleChange = e => {
        setValue(e.target.value);
        setTerm(e.target.value);
    }

    return (
        <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                value={value}
                onChange={handleChange}/>
    )
}

export default SearchPanel;