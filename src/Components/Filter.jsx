import React from 'react'
import Stars from "./Stars"

export default function Filter({title,setTitle,rating,setRating}) {
  return (
    <div style={{display:"flex",justifyContent:"center", margin:"20px 0",gap:"10px"}}>
      <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)} />
      <Stars  rating={rating} setRating={setRating}/>
    </div>
  )
}
