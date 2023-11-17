import { useDispatch, useSelector } from "react-redux";
import { DELETE_ITEM, EDIT_ITEM } from "../../redux/actions";

export  function TaskItem({item}) {
    const dispatch = useDispatch();
    const { form, userValue } = useSelector((state) => state.number);

    const handleEdit = ()=>{
        dispatch({
            type: EDIT_ITEM,
            payload: item
        })
    }

    const handleDelete = ()=> {
        dispatch({
            type: DELETE_ITEM,
            payload: item
        })
    }

    return (
        <div className='item'>
            <div className='item-content'>{item.title} {item.value}</div>
            <div>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>delete</button>
            </div>
        </div>
    )
}
