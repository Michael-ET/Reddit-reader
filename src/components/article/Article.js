import React from 'react';

export default function Article(props){

    return (
        <article className='article'>
            <a className='a' href={ 'https://reddit.com' + props.article.permalink } target='_blank'>
                <div>
                    {props.article.thumbnail !== 'self' ? <div><img className='pic' src={props.article.thumbnail}/><br></br></div> : null}
                    {props.article.title}
                </div>
            </a>
        </article>
    )
}
