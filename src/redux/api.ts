import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

 export const myApi = createApi({
    reducerPath: "myApi",
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhostt:3000/"
    }),
    // typeTags:["Posts"],
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], string>({ query: () => "posts" }),
        newPost: builder.mutation<Post, Post>({
            query: (post) => ({
                   url: "posts",
                    method: "POST",
                   body:post
            }),
            // providesTags:["Posts"],   
       }),
        
    })
 })

export const { useGetPostsQuery,useNewPostMutation } = myApi.endpoints;