import React from "react";
import Header from "./Header";
import Article from "./Article";
import Footer from "./Footer";
import images1 from './images/blog-image-1.jpg'
import images2 from './images/blog-image-2.jpg'

const articleText1 = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quasi facere odit. Autem velit et laudantium hic illo corporis, excepturi dolore fugit veniam modi debitis nam quia neque beatae odit."
const articleText2 = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quasi facere odit. Autem velit et laudantium hic illo corporis, excepturi dolore fugit veniam modi debitis nam quia neque beatae odit."

function App() {
return (

<div classname = "app">
<Header/>
<Article date = "11/12/20"
title = "On the Street in Brooklyn"
text = {articleText1}
image = {images1}
/> 

<hr></hr>

<Article date = "11/11/20"
title = "Vintage in Vogue"
text = {articleText2}
image = {images2}
/>

<hr></hr>

<Footer/>
</div>

)};

export default App;
