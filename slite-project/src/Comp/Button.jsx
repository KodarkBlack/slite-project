import React from 'react'
import PropTypes from 'prop-types'

const Button = ({props, className, id}) => {
  return (
    <div>
      <button id={`${id}`}  className={`${className}`}>{props}</button>
    </div>
  )
}
Button.PropTypes = {
    props: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired
}

export default Button
