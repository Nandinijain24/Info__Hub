import React, { useEffect,  useState } from 'react'
import Card from './card';

function Newsapp() {

const [search,setSearch] = useState("India")
const [newsData,setNewsData] = useState([])
     const API_KEY ="08d5cda76cb84d149f916a9ae546d706";

     const getData =async() =>{
const response =await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
     const jsonData=await response.json();
     console.log(jsonData.articles);
     setNewsData(jsonData.articles)
}

useEffect(()=>{
getData()
},[])
const handleInput=(event)=>{
     console.log(event.target.value);
     setSearch(event.target.value)
}
const userInput=(event)=>{
setSearch(event.target.value)
}
  return (
    <div>
<nav>
     <div>
          <h1>Trendy News</h1>
     </div>
     <ul>
         <a>All News</a>
         <a>Trending</a>
     </ul>
     <div className='searchBar'>
          <input type='text' placeholder='Search News' value={search}onChange={handleInput}/>
          <button onClick={getData}>Search</button>

     </div>
</nav>
<div>
     <marquee className='head'>Stay update with TrendyNews</marquee>
</div>
<div className='categoryBtn'>
     <button onClick={userInput} value='sports'>Sports</button>
     <button onClick={userInput} value='politics'>politics</button>
     <button onClick={userInput}  value='Entertainment'>Entertainment</button>
     <button onClick={userInput}  value='Health'>Health</button>
     <button onClick={userInput}  value='Fitness'>Fitness</button>
</div>

<div>
<Card data={newsData}/>
</div>
    </div>
  )
}

export default Newsapp
