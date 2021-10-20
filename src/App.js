import './App.css';
import React, {useState} from 'react';
import Article from './components/article/Article';


function App(props) {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
 

  const handleSearch = (e) => {
    const searchResult = fetch('http://www.reddit.com/search.json?q=' + search)
    searchResult.then(res=>{
      res.json().then(data=>{
        setArticles(data.data.children)
        console.log(articles)
        return
      })
    })
    e.preventDefault()
  }
  
  const handleInputChange = (e) => {
    setSearch(e.target.value)
     
  }
 

  return (
    <div className="App">
      
      <header className='topBar'>
        <img className='logo1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0aa8LVRV6djTyVBBNRpf_qt-ULHwqC2ysUHK3PkZdYCgUYiN_YEPKk4qvUDIrM6qhH4&usqp=CAU'></img>
        <img className='logo2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW0aa8LVRV6djTyVBBNRpf_qt-ULHwqC2ysUHK3PkZdYCgUYiN_YEPKk4qvUDIrM6qhH4&usqp=CAU'></img>
        <h1 className='title'>Reddit-Reader</h1>         
      </header>
     
        <form onSubmit={handleSearch}>
            <input 
              className='searchBar' 
              type='text'
              onChange={handleInputChange}
              placeholder='Search me...'
            />
            <button className='button'>Search</button>
        </form>

        <br></br>

        <div className='window1'>
            {
              articles.map((article,index) => <Article key={index} article={article.data}/>)
            }
        </div>

    </div>

  );
}

export default App;