import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { useGetPostsQuery } from './redux/api'
import PostCard from './components/PostCard'

export function App() {
  const { isError, isLoading, isSuccess, error, data } = useGetPostsQuery("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitHandler = (e:formEvent<HTMLFormElement>) => {
    e.preventDefault();
}
  return (
    <>
      <h1>
        My App
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e:string)=>setTitle(e.target.value)
              />
               <input
            type="text"
            placeholder="body"
            value={body}
            onChange={(e:string)=>setBody(e.target.value)
              />
              <button type="submit">Add</button>
      </form>
        {data?.map((p) => {
        <PostCard key={p.id} post={ p} />
        })}
        
      </h1>
      </>
  )
}
