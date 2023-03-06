import React, { FC } from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostService'

interface PostItemProps {
  post: IPost
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  const [deletePost] = postAPI.useDeleteNewPostMutation()
  const [updatePost] = postAPI.useUpdateNewPostMutation()

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation()
    deletePost(post)
  }

  const handleUpdate = () => {
    const title = 'CHANGED TITLE'
    updatePost({ ...post, title })
  }

  return (
    <div onClick={handleUpdate}>
      {post.id} {post.title}
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default PostItem
