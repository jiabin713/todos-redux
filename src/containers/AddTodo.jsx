import React from 'react';
import { connect } from 'react-redux';

import { todoAdd } from '../actions';

// const AddTodo = (props) => {
//   let input;
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const {dispatch} = props;
//     if(input.value.trim()) {
//       dispatch(todoAdd(input.value))
//     }
//     input.value = '';
//   }

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//       >
//         <input
//           type="text"
//           ref={(node) => input = node}
//         />
//         <button type="submit">
//           Add Todo
//         </button>
//       </form>
//     </div>
//   )
// }
class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const {dispatch} = this.props;
    if(this.input.current.value.trim()) {
      dispatch(todoAdd(this.input.current.value))
    }
    this.input.current.value = '';
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            ref={this.input}
          />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTodo);