import React from 'react'

const PrimaryButton = ({label, ...rest}) => {
  return (
    <button {...rest} className='btn btn-primary'>
        {label}
      </button>
  )
}
export default PrimaryButton;