import React from 'react'
import classes from './SelectTeal.module.css'

const SelectTeal = ({ value, onChange, defaultOption, options }) => {
  return (
    <select
      className={classes.wrapper}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled>{defaultOption}</option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  )
}

export default SelectTeal
