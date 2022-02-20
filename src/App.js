import React, { useMemo, useState } from 'react'
import Filter from './Components/Filter/Filter'
import Form from './Components/Form/Form'
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
  let [filter, setFilter] = useState({ sort: '', query: '' })

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }
  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      )
    }
    return posts
  }, [filter.sort, posts])
  const searchedAndSelectedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    )
  }, [filter.query, sortedPosts])
  return (
    <div className="App_wrapper">
      <Form addPost_Func={addNewPost} />

      <Filter filter={filter} setFilter={setFilter} />

      {searchedAndSelectedPosts.length ? (
        <List posts={posts} removePost={removePost} />
      ) : (
        <h2 className="App_titleWarningNoPosts">No posts</h2>
      )}
    </div>
  )
}

export default App
