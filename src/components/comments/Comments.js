import React, {useState} from 'react';


export default function Comments(props){
 console.log(props.data.url + props.data.permalink + '.json')   
 const [comments, setComments] = useState([]);

  const generateComments = () => {
      fetch(props.data.url + props.data.permalink + '.json').then(res=>{
          res.json().then(data=>{
              setComments(data)
              console.log(data)
              return
          })
      })
  }


    
    return(
        <div>

          {generateComments}
            
        
        </div>
    )
}