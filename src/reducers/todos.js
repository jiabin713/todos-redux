import {
  TODO_ADD,
  TODO_REMOVE,
  TODO_TOGGLE,
} from '../actions/actionTypes';

// const todo = (state = {}, action) => {
//   switch (action.type) {
//     case TODO_ADD:
//       return {
//         id: action.id,
//         text: action.text,
//         completed: false,
//       };
//     case TODO_TOGGLE:
//       return {
//         ...state,
//         completed: !state.completed,
//       };
//     default:
//       return state;
//   }
// }

const todos = (state = [], action) => {
  switch (action.type) {
    case TODO_ADD:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        }
      ];
    case TODO_REMOVE:
      return (
        state.filter(todo => todo.id !== action.id)
      );
    case TODO_TOGGLE:
      return (
        state.map(todo => {
          if (todo.id === action.id) {
            return { ...todo, completed: !todo.completed }
          }
          return todo;
        })
      );
    default:
      return state;
  }
}

export default todos;
