import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {addPost} from './postsSlice'

function AddPostForm(props) {

  const dispatch = useDispatch()

  const [postValue, setPostValue] = useState('')
  const [contentValue, setContentValue] = useState('')

  function handlePostInput(e) {
    setPostValue(e.target.value)
  }
  function handleContentInput(e) {
    setContentValue(e.target.value)
  }

  function handleBtnClick(e) {
    e.preventDefault()
    dispatch(addPost(postValue, contentValue))
    setContentValue('')
    setPostValue('')
  }

  return(
    <section>
      <h2>Add Post</h2> 
      <form onSubmit={handleBtnClick}>
        <label htmlFor="postTitle">Post Title</label>
        <input 
            type="text" 
            name="postTitle"
            id="postTitle"
            onChange={handlePostInput}
            value={postValue}
        />
        <label htmlFor="postContent">Post Content</label>
        <input 
            type="text" 
            name="postContent"
            id="postContent"
            onChange={handleContentInput}
            value={contentValue}
        />
        <button type="submit">Save</button>
      </form> 
    </section>
  )
}

export default AddPostForm