import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { IPost } from '../models/IPost'

export const postAPI = createApi({
  reducerPath: 'postAPI',
  tagTypes: ['Post'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
  }),
  endpoints: build => ({
    fetchAllPosts: build.query<IPost[], number>({
      // IPost[] - то что мы получаем после выполнения запроса, number - параметр, который передаём потом в хуке
      query: (limit: number = 5) => ({
        url: '/posts',
        params: {
          _limit: limit,
        },
      }),
      providesTags: () => ['Post'],
    }),
    createNewPost: build.mutation<IPost, IPost>({
      // 1 - тип объекта который вернётс и 2 - тип объекта который ожидаем аргументом
      query: post => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    updateNewPost: build.mutation<IPost, IPost>({
      // 1 - тип объекта который вернётс и 2 - тип объекта который ожидаем аргументом
      query: post => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    deleteNewPost: build.mutation<IPost, IPost>({
      // 1 - тип объекта который вернётс и 2 - тип объекта который ожидаем аргументом
      query: post => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
})
