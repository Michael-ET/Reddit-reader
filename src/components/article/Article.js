import React from 'react';


export default function Article (props){
    return(
        <article className='article'>
            <a href={ 'https://reddit.com' + props.article.permalink } target='_blank'>
                <h2>{props.article.author}</h2>
                <h3>{props.article.title}</h3>
            </a>
      
        </article>
    )
}