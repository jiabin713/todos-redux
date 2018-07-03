import {connect} from 'react-redux';

import TodoList from '../components/TodoList';
import { VisibilityFilters, todoToggle } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_ACTIVE:
      return (
        todos.filter(todo => !todo.completed)
      );
    case VisibilityFilters.SHOW_COMPLETED:
      return (
        todos.filter(todo => todo.completed)
      );
    default:
      throw new Error(`Unknow filter: ${filter}`)
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    todoToggle: id => dispatch(todoToggle(id)) 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)