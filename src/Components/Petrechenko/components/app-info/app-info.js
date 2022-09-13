import "./app-info.css";

const AppInfo = ({countWorkers, counterRise}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {countWorkers}</h2>
            <h2>Премию получат: {counterRise}</h2>
        </div>
    )
}

export default AppInfo;