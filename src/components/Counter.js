import React from 'react'
import { connect } from "react-redux";
import { INCREMENT, DECREMENT} from '../actions'

function Counter(props) {
  return (
    <p>
      Clicked: {props.value} times
          {' '}
      <button onClick={props.onIncrement}>
        +
          </button>
      {' '}
      <button onClick={props.onDecrement}>
        -
          </button>
    </p>
  )
}

const mapStateToProps = ({counter}) => {
  return {value:counter.value}
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(INCREMENT),
    onDecrement: () => dispatch(DECREMENT)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
