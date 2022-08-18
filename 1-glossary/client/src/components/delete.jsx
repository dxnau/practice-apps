import React from 'react';

var Delete = (props) => {
  return (
    <button onClick={() => {props.delete(props.word)}}>Delete</button>
  )
}

export default Delete;