import React from 'react'
import { SET_FILTER } from '../../redux/actions';
import { useDispatch, useSelector } from "react-redux";

export  function Filter() {
  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state.number);

  return (
    <div>
      <span>Filter: </span>
      <input
          type="text"
          name="filter"
          value={filter}
          onChange={(e) => {
            dispatch({
              type: SET_FILTER,
              payload: e.target.value,
            });
          }}
        />
    </div>
  )
}
