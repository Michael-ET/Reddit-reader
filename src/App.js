import './App.css';
import React, {useState, useEffect} from 'react'
import Article from './components/article/Article'



function App() {
 
  const [articles, setArticles] = useState([])
  const [subReddit, setSubReddit] = useState('news');


  useEffect(()=>{
    
    fetch('https://www.reddit.com/r/'+ subReddit + '.json').then(res=>{
      if(res.status !== 200){
        console.log('error')
        return
      }
      res.json().then(data=>{

          setArticles(data.data.children)
          console.log(articles)
        
      })
    })
  }, [subReddit])


  const handleSubmit = (e) => {
    setSubReddit(e.target.value)
    console.log(e.target.value)
  }


  return (
    <div className="App">
      
      <header>
        <h1 className='title'>Reddit-Reader</h1>
      </header>

      <form>
            <input 
                type='text' 
                className='searchBar' 
   
              
            
                onSubmit={handleSubmit}
            />
            <button className='button'>Search</button>
        </form>


      <br></br>

      <div className='window1'>
       
       {  articles.map((article,index) => <Article key={index} article={article.data}/>)  }

      </div>


      <div className='window2'></div>

  </div>

  );
}

export default App;

