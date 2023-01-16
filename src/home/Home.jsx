import React from "react";
import List from "../Components/List/List";
import Navbar from "../Components/Navbar/Navbar";
import "./home.scss";
import { moviedata } from "../moviedata";
import Filter from "../Components/Filter";
import { useState } from "react";
import Addmovie from "../Components/Addmovie";


const Home = () => {
  const [title,setTitle]= useState("")
  const [rating,setRating]=useState(1)
  const addMovie=(movie)=>{
    moviedata.push(movie)

  }
  return (
    <div className="home">
      <Navbar />
      <img
        height={700}
        src="https://t3.ftcdn.net/jpg/01/41/48/32/240_F_141483279_Ed0Wx0LF9tfF7zGVRYG7Kv5fL0suXYEb.jpg"
        alt=""
      />
      <Filter title={title}setTitle={setTitle} rating={rating} setRating={setRating}/>
      <div style={{display:"flex",justifyContent:"center", margin:"20px 0"}}><Addmovie addMovie={addMovie}/></div>
      <List moviedata={moviedata} title={title} rating={rating} />
      {/* <List/> */}
    </div>
  );
};

export default Home;
