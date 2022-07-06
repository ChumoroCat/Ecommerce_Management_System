import React from 'react'

function ErrorMessage(props) {
  return (
    <p className='centered-big'>{props.children}</p>
  )
}

export default ErrorMessage