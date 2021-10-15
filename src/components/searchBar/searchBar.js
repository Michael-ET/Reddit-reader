import React from 'react';

export default function searchBar(props){
    
    return (
        <form>
            <input 
                type='text' 
                className='searchBar' 
                placeholder='read reddit...' 
                value={props.subReddit} 
                onSubmit={e => props.setArticles(e.target.value)}
            />
            <button className='button'>Search</button>
        </form>

    )
}