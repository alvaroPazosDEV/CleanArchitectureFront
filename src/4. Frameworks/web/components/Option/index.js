import React from 'react'
import ripleyBar from '../../assets/images/bar.png'
import './index.scss'

const Option = ({ text, onClick }) => {

  return (
    <div className='option-container' onClick={() => onClick()}>
      <p>{text}</p>
      <img src={ripleyBar} />
    </div>
  )

}

export default Option