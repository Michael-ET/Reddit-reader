import React from 'react';
import Comments from "../comments/Comments.js";

export default function Article(props){

    return (
        <article className='article'>
            <a className='anc' href={ 'https://reddit.com' + props.article.permalink } target='_blank'>
                <div>
                    <div>
                        {props.article.thumbnail !== 'self' ? <img className='pic' src={props.article.thumbnail}/> : null}
    
                        <div className='votes'> Up-votes: {props.article.ups}  </div>
                        <br></br>
                        <Comments data={props.article}/>
                        <br></br>
                        {props.article.title}
                    </div>    
                </div>
            </a>
        </article>
    )
}
