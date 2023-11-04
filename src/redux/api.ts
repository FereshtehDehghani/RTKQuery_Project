import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

 export const myApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhostt:3000/"
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], string>({ query: () => "posts" }),
        newPost: builder.mutation<Post, Post>({
            query: (post) => ({
                   url: "posts",
                    method: "POST",
                   body:post
            }),
               
       }),
        
    })
 })

export const { useGetPostsQuery,useNewPostMutation } = myApi.endpoints;