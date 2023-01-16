import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined , } from '@material-ui/icons'
import React, { useState } from 'react'
import "./list1.scss"

const ListItem = ({index, movie,}) => {
  const [isHovered,setIsHovered] = useState(false);
  

  return (
    <div className='listItem'
    style={{left: isHovered && index * 225 -50 + index * 2.5}}
    
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}
    >
      <img height={110} src={movie.poster}/>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrow/>
          <Add/>
          <ThumbUpAltOutlined/>
          <ThumbDownOutlined/>
        </div>
        <div className="itemInfotop">
          <span>1hour 14 mins</span>
          <span className='limit'>+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet, 
          consectetur adipisicing elit. 
          Vel temporibus labore et ad. Molestias, 
          quibusdam non vero mollitia numquam, 
          </div>
          <div className="genre">Action</div>

      </div>
    </div>
  );
}

export default ListItem
