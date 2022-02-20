import React, { useState } from 'react'
import List from './Components/List/List'
import './Style/App.css'

const App = () => {
  let [posts, setPosts] = useState([
    { id: 1, title: 'Ruby', body: 'Programming language' },
    { id: 2, title: 'JS', body: 'Programming language' },
    { id: 3, title: 'Java', body: 'Programming language' },
    { id: 4, title: 'Swift', body: 'Programming language' },
    { id: 5, title: 'Python', body: 'Programming language' },
    { id: 6, title: 'C', body: 'Programming language' },
  ])

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  return (
    <div className="App_wrapper">
      <List posts={posts} removePost={removePost} />
    </div>
  )
}

export default App
