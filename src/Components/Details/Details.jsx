import React from "react";
import { moviedata } from "../../moviedata";
import { useParams,useNavigate } from "react-router-dom";

function Details() {
  
  const { id } = useParams();
  const navigate=useNavigate();
  const movie = moviedata.find((el) => el.id == id);
  const onClick = () => navigate('/');
  

  return (
    <div >
      <iframe  src="https://www.youtube.com/embed/bzLn8sYeM9o"></iframe>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
        repudiandae maxime doloremque deserunt quaerat autem, maiores beatae, et
        eum facilis perspiciatis laudantium amet possimus inventore magni itaque
        laborum qui suscipit
      </p>
      <button onClick={onClick}>
        Go Back
        </button>
    </div>
  );
  
}

export default Details;
