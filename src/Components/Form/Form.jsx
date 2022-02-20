import React, { useState } from 'react'
import ButtonTeal from '../../UI/ButtonTeal/ButtonTeal'
import InputTeal from '../../UI/InputTeal/InputTeal'
import classes from './Form.module.css'

const Form = ({ addPost_Func }) => {
  let [param, setParam] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    let newPost = {
      ...param,
      id: Date.now(),
    }
    addPost_Func(newPost)
    setParam({ title: '', body: '' })
  }
  return (
    <form className={classes.wrapper}>
      <InputTeal
        type="text"
        placeholder="Title"
        value={param.title}
        onChange={(e) => setParam({ ...param, title: e.target.value })}
      />
      <InputTeal
        type="text"
        placeholder="Body"
        value={param.body}
        onChange={(e) => setParam({ ...param, body: e.target.value })}
      />
      <ButtonTeal onClick={addNewPost}>Add post</ButtonTeal>
    </form>
  )
}

export default Form
