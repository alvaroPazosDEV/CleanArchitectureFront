import React from 'react'
import SearchIcon from '../../assets/images/search.svg'
import './index.scss'

const Search = ({ placeholder, value, onChange }) => {
  return (
    <div className='search-container'>
      <img src={SearchIcon} alt='search-icon' />
      <input
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

export default Search
