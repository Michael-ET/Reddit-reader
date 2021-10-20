import React, {useState, useEffect} from 'react';


export default function Comments(props){

const [comments, setComments] = useState([]);

useEffect(()=>{
    const urlFetch = fetch('https://www.reddit.com' + props.data.permalink + '.json')
    urlFetch.then(res=>{
        res.json().then(data=>{ 
            setComments(data[1].data.children)
        })
    })
})

    return(
        <div className='commentBox'>
           {
           comments.map((comment, index)=>
           <li className='comment' key={index}><div className='cTitle'>{comment.data.author}</div><div>{comment.data.body}</div></li>)
           
           }

        </div>
    )
}