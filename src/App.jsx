import { useState,useEffect } from 'react'
import { getPosts,randomUser } from './component/Api'
import './App.css'
import PostCard from './component/PostCard';
import UserCard from './component/UserCard';
function App() {
  const [data,setData]=useState(null);
  const [user,setUser]=useState(null);
  
  useEffect(()=>{
    getPosts().then((posts)=>setData(posts))
  },[])
  useEffect(()=>{
    randomUser().then((userData)=>setUser(userData.results[0]))
  },[])
  const refresh=()=>{
    randomUser().then((userData)=>setUser(userData.results[0]))

  }  
  return (
    <>
    <div className='App'>
      <h2>Data Fetched from API : <br />("https://randomuser.me/api/")</h2>
    {user && <UserCard data={user}/>}
    <button onClick={refresh}>Referesh</button>
    <br />
    <br />
    <h4>This data is fetched from API : ("https://jsonplaceholder.typicode.com/posts ")</h4>
    {data? data.map((e)=><PostCard key={e.id} title={e.title} body={e.body}/>):<p>NO data</p>}</div>
    </>
  )
}

export default App
