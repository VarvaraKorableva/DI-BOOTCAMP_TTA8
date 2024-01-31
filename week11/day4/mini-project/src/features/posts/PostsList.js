
import AddPostForm from './AddPostForm.js'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect, useState} from 'react'
import {fetchPost} from './postsSlice'
import ReactionButton from './ReactionButton.js'
import Users from '../users/Users.js'

function PostList(props) {

    const posts = useSelector(state => state.posts.posts)
    const dispatch = useDispatch()
    const postStatus = useSelector(state => state.posts.posts)
    const author = useSelector(state => state.posts.author)


    useEffect(() => {
        dispatch(fetchPost())
    }, [])

    if(postStatus === 'loading') return <p>Loading ...</p>
    if(postStatus === 'failed') return <p>Somthing went wrong...</p>

    const renderPosts = posts
        .filter(post => {
            if(author != -1) return post.userId == author
            return post
        })
        .map(post => {
            return (
                <acticle key={post.id} className='post'>
                    <p>{post.title}</p>
                    <ReactionButton post={post}/>
                </acticle>
            )
        })

  return(
    <section className='main-container'>
        <Users/>
        <AddPostForm/>
        <h2>Posts</h2> 
        {renderPosts}
    </section>
  )
}

export default PostList;