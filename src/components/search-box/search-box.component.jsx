import React from 'react'

import './search-box.styles.css'

// just a functional component, because it only needs to render html
// if internal state or lifecycle methods are not needed, then a functional component is enough
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search'
        type='search' 
        placeholder={placeholder}
        onChange={handleChange}
    />
)