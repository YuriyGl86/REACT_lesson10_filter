import { useDispatch, useSelector } from "react-redux";
import { TaskItem } from "../TaskItem";


export  function List() {
    const dispatch = useDispatch();
    const { list } = useSelector((state) => state.number);

    return (
        <ul>
            {list.map((task, index) => {
                return (<li key={task.id}>
                            <TaskItem item ={task}></TaskItem>
                        </li>)
            })}
        </ul>
    )
}
