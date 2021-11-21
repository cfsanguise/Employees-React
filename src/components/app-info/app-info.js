import "./app-info.css";

const AppInfo = ({employees}) => {
    const increase = employees.filter(employee => employee.increase == true);

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employees.length}</h2>
            <h2>Премию получат: {increase.length}</h2>
        </div>
    )
}

export default AppInfo;