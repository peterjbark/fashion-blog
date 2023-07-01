import React from "react";

function Article(props){
    return (
        <div>
        <article>
        <h3 class = "date">{props.date}</h3>
        <h1>{props.title}</h1>
        <img src = {props.image} alt = {props.alt}/>
        <p>{props.text}</p>
        </article>
        <h2 className = "continue">Continues ...</h2>
        </div>
        )};

export default Article;