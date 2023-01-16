import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
 
} from "@material-ui/icons";
import React from "react";
import "./list.scss";
import ListItem from "../ListItem/ListItem";
import { useRef } from "react";
const List = ({ moviedata , title,rating}) => {
  console.log(moviedata);

  const listRef = useRef();

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left") {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if (direction === "right") {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
        />
        <div className="container" ref={listRef}>
          {moviedata.filter(movie =>movie.name.toLowerCase().includes(title.toLowerCase().trim()) && movie.rating===rating).map((movie) => (
            <ListItem key={movie.id} movie={movie} index={movie.id-1} />
          ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
