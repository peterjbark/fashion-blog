import React from "react";

function Article(props){
    return (
        <article>
        <h3 class = "date">{props.date}</h3>
        <h1>{props.title}</h1>
        <img src = {props.image} alt = "Three models"/>
        <p>{props.text}</p>
        </article>
        )};

export default Article;