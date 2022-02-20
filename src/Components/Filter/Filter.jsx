import React from 'react'
import InputTeal from '../../UI/InputTeal/InputTeal'
import SelectTeal from '../../UI/SelectTeal/SelectTeal'
import classes from './Filter.module.css'

const Filter = ({ filter, setFilter }) => {
  return (
    <div className={classes.wrapper}>
      <InputTeal
        type="text"
        placeholder="Search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <SelectTeal
        options={[
          { name: 'By name', value: 'Title' },
          { name: 'By description', value: 'Body' },
        ]}
        defaultOption="Sorting"
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
      />
    </div>
  )
}

export default Filter
