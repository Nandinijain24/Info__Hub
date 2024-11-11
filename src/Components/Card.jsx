import React from 'react'

const Card=({data})=> {
  console.log(data);

  
  return (
    
    <div className='cardContainer'>
      {data.map((curItem,index)=>{
        if(!curItem.urlToImage){
          return null
        }
        return(
          <div className='card' key={index}>
<img src={curItem.urlToImage} alt='news'/>
<div className='content'>
  <a className='title' onClick={()=> window.open(curItem.url, '_blank')}>{curItem.title}</a>
  <p>{curItem.description}</p>
  <button onClick={()=> window.open(curItem.url, '_blank')}>Read More</button>
</div>
            </div>

        )
      })}
    </div>
  )
}

export default Card
