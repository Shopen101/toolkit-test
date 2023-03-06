import React, { useState } from 'react'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
  const [limit, setLimit] = useState<number>(1)
  const {
    data: posts,
    error,
    isLoading,
    refetch,
  } = postAPI.useFetchAllPostsQuery(limit, {
    pollingInterval: 10000,
  })

  return (
    <div>
      {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>Error</h1>}
      <button onClick={() => setLimit(13)}>SET LIMIT</button>
      <button onClick={() => refetch()}>REFETCH</button>
      {posts &&
        posts.map(post => {
          return <PostItem post={post} />
        })}
    </div>
  )
}

export default PostContainer
