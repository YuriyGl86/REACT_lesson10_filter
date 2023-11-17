import { ADD_TASK, DELETE_ITEM, EDIT_CANCEL, EDIT_ITEM, SET_FILTER, SET_FORM_TILE, SET_FORM_VALUE } from "./actions";

// const initialState = {
//   value: 0,
//   userValue: 0,
// };


const initialState = {
  form: {title:'', value: ''},
  list: [{title:'ЗАмена стекла', value: '21000', id:null}],
  edit: false,
  filter: '',
};



const numberReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_TILE:
      return {
        ...state,
        form: {...state.form, title: action.payload}
      }
    case SET_FORM_VALUE:
      return {
        ...state,
        form: {...state.form, value: action.payload}
      }


    case SET_FILTER:
      return {
        ...state,
        filter: action.payload
      }


    case ADD_TASK:
      let newList
      if(state.edit){
        newList = state.list.map(item => {
          if(item.id === state.edit){
            return {...action.payload, id: state.edit}
          }else{return item}
          })
      } else {
        newList = [...state.list, action.payload]
      }
      console.log(newList)
      return {
        ...state,
        list: newList,
        form: {title:'', value: ''},
        edit:false
      }
    case EDIT_ITEM:
      return {
        ...state,
        edit: action.payload.id,
        form: action.payload
      }
    case EDIT_CANCEL:
      return {
        ...state,
        edit: false,
        form: {title:'', value: ''},
      }
    case DELETE_ITEM:
      let newState 

      if(state.edit === action.payload.id){
        newState = {
          ...state,
          edit: false,
          form: {title:'', value: ''},
          list: state.list.filter(i => i.id !== action.payload.id)
        }
      } else {
        newState = {
          ...state,  
          list: state.list.filter(i => i.id !== action.payload.id)
        }
      }

      return newState

    default:
      return state;
  }
};

export default numberReducer;
