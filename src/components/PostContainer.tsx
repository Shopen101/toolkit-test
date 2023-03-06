import React from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(5)

  return (
    <div>
      {isLoading && <h1>'Идёт загрузка...'</h1>}
      {error && <h1>Error</h1>}
      {posts &&
        posts.map(post => {
          return <PostItem post={post} />
        })}
    </div>
  )
}

export default PostContainer
