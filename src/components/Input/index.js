import React, { useState, useRef, useEffect } from 'react'
import ShowPass from '../../assets/images/eye.svg'
import HidePass from '../../assets/images/eye_hide.svg'
import './index.scss'

const Input = ({ name, placeholder, value, onChange, error, type, buttonDisabled, onClick, onEnter }) => {
  const [focused, setFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const inputRef = useRef(null)

  const renderButton = () => {
    switch(type) {
      case 'password':
        return (
          <div className={`input-button-password ${!focused && 'not-focused'}`} onClick={() => toggleShowPassword()}>
            <img src={showPassword ? HidePass : ShowPass} alt='mostrar' />
          </div>
        )
      default: return null
    }
  }

  const clickButton = () => {
    onClick()
    inputRef.current.focus()
  }

  const toggleShowPassword = () => {
    setShowPassword(!showPassword)
    inputRef.current.focus()
  }

  useEffect(() => {
    inputRef.current.selectionStart = inputRef.current.value.length
    inputRef.current.selectionEnd = inputRef.current.value.length
  }, [showPassword])

  const getType = () => {
    switch(type) {
      case 'password':
        return showPassword ? 'text' : 'password'
      default: return 'text'
    }
  }

  return (
    <>
      <div className='input-container' style={focused ? { border: '1.5px solid #5E388A' } : null }>
        <label className="pure-material-textfield-filled">
          <input
            name={name}
            ref={inputRef}
            placeholder=" "
            spellCheck="false"
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            value={value}
            onChange={e => name ? onChange(e) : onChange(e.target.value)}
            type={getType()}
            onKeyDown={e => onEnter && e.key==='Enter' && onEnter() }
          />
          <span style={value && !focused ? { color: 'var(--ripley-lavanda)' } : null}>{placeholder}</span>
        </label>
        {renderButton()}
      </div>
      { error && <span className='input-container-error'>{error}</span>}
    </>
  )

}

export default Input
