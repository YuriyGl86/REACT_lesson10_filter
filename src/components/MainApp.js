// import { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TASK, EDIT_CANCEL, SET_FORM_TILE, SET_FORM_VALUE, SET_USER_VALUE } from "../redux/actions";
import { v4 as uuidv4 } from 'uuid';



export const MainApp2 = ({ newsId }) => {
  const dispatch = useDispatch();
  const { form, edit } = useSelector((state) => state.number);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());

    dispatch({
      type:ADD_TASK,
      payload: {...value, id: uuidv4()}
    });

  }

  const handleCancel =(e)=>{
    e.preventDefault()
    dispatch({
      type: EDIT_CANCEL
    })
  }


  return (
    <form onSubmit={submitHandler} className="form">
      <div>
        <input
          type="text"
          name="title"
          required
          value={form.title}
          onChange={(e) => {
            dispatch({
              type: SET_FORM_TILE,
              payload: e.target.value,
            });
          }}
        />
        <input
          type="number"
          name="value"
          required
          value={form.value}
          onChange={(e) => {
            dispatch({
              type: SET_FORM_VALUE,
              payload: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <button type="submit">Save</button>
        {edit?<button onClick={handleCancel}>Cancel</button>: null}
      </div>
      
    </form>
  )
}

// const mapStateToProps = (state, props) => {
//   return {
//     numberValue: state.number.value,
//     userValue: state.number.userValue,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatch
//   }
// }

// export default connect(
//   mapStateToProps, mapDispatchToProps,
// )(MainApp);
