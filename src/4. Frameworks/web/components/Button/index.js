import React from 'react'
import './index.scss'

const Button = ({ text, type, color='var(--ripley-violeta)', disabled, onClick }) => {
  return (
    <div
      className={`button-container ${disabled ? 'disabled' : null}`}
      style={{
        backgroundColor: type === 'primary' ? color : 'var(--textos-negativo)',
        color: type === 'primary' ? 'var(--textos-negativo)' : color,
        border: `1px solid ${color}`
      }}
      onClick={() => onClick()}
    >
      {text}
    </div>
  )
}

export default Button
