import React from 'react'
import ButtonTeal from '../../UI/ButtonTeal/ButtonTeal'
import classes from './Item.module.css'

const Item = ({ postInfo, removePost, number }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h3 className={classes.container_titlePost}>
          {number}. {postInfo.title}
        </h3>
        <p className={classes.container_infoAboutPost}>{postInfo.body}</p>
      </div>
      <ButtonTeal onClick={() => removePost(postInfo)}>Delete</ButtonTeal>
    </div>
  )
}

export default Item
