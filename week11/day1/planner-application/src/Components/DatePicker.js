import './styles.css'
import { useSelector } from 'react-redux';

const DatePicker = ({handleAddTaskPopapClick}) => {

    const tasks = useSelector((state) => state.tasks.tasks);

    let daysArr = []

    for(let i=1; i < 32; i++) {
        daysArr.push(i)
    }

    function onClick() {
        handleAddTaskPopapClick()
    }

    const currentDate = new Date();
    const currentMonthName = currentDate.toLocaleString('default', { month: 'long' });

    const currentYear = currentDate.getFullYear();

    return(
    <ul className="days__container">
        {daysArr.map((item) => (
            <li className="day" key={item}>
                {item} {currentMonthName}
                <button className='addBTN' onClick={onClick}>+</button>
                <ul>
                    {tasks
                        .filter((task) => {
                            const taskDate = new Date(task.date);
                            return taskDate.getDate() === item;
                        })
                        .map((filteredTask) => (
                            <li key={filteredTask.id}>{filteredTask.text}</li>
                        ))}
                </ul>
            </li>
        ))}
    </ul>
)
}

export default DatePicker;