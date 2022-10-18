
import React, { useEffect, useState } from 'react'
import SearchBox from './Components/SearchBox';
import CardList from './Components/CardList';
function App() {
  const [user,setUser] = useState([]);
  const [search,setSearch] = useState("")

  const fetchData=()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data)=>setUser(data));
  }
 useEffect(()=>{
  fetchData();
 },[])

   const filteredAvator = user.filter(userInfo => userInfo.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <h1>Avators</h1>
      <SearchBox
      placeholder="Search"
      handleChange={e=>setSearch(e.target.value)}/>
      <CardList user = {filteredAvator}/> 
    </div>
  )
}
export default App