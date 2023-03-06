import React from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(50)
  const [createPost, { isLoading: isLoadingNewPost }] =
    postAPI.useCreateNewPostMutation()

  const handleCreate = async () => {
    const title = '1234'
    await createPost({ title, body: title } as IPost)
  }

  return (
    <div>
      {isLoading && <h1>'Идёт загрузка...'</h1>}
      {error && <h1>Error</h1>}
      <button onClick={handleCreate}>Добавить новый пост</button>
      {posts &&
        posts.map(post => {
          return <PostItem post={post} />
        })}
    </div>
  )
}

export default PostContainer
