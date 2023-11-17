import { useDispatch, useSelector } from "react-redux";
import { TaskItem } from "../TaskItem";


export  function List() {
    const dispatch = useDispatch();
    const { list, filter } = useSelector((state) => state.number);

    const listToDisplay = list.filter(i=> {
        if(!filter || i.title.toLowerCase().includes(filter.toLowerCase())){
            return true
        }
    })

    return (
        <ul>
            {listToDisplay.map((task, index) => {
                return (<li key={task.id}>
                            <TaskItem item ={task}></TaskItem>
                        </li>)
            })}
        </ul>
    )
}
