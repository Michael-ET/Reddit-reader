import React from 'react';
import Comments from "../comments/Comments.js";

export default function Article(props){

    return (
        <article className='article'>
            <a className='anc' href={ 'https://reddit.com' + props.article.permalink} target='blank'>
                <div>
                    <div>
                        <div className='picSpace'>
                            {props.article.thumbnail !== 'self' ? <img alt='' className='pic' src={props.article.thumbnail}/> : <img className='logo3' alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0aa8LVRV6djTyVBBNRpf_qt-ULHwqC2ysUHK3PkZdYCgUYiN_YEPKk4qvUDIrM6qhH4&usqp=CAU'></img>}
                            <Comments data={props.article}/>
                        </div>
                        <br></br>
                        <br></br>
                        <div className='aTitle'>
                            <li>{props.article.title} </li>
                        </div>
                    </div>    
                </div>
            </a>
        </article>
    )
}
