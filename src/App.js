import './App.css';
import React, {useState} from 'react';
import Article from './components/article/Article';

function App(props) {

  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
 

  const handleSearch = (e) => {
    const searchResult = fetch('http://www.reddit.com/r/' + search + '.json')
    searchResult.then(res=>{
      res.json().then(data=>{
        setArticles(data.data.children)
        console.log(articles)
        return
      })
    })
    e.preventDefault()
    console.log(search)
  }
  const handleInputChange = (e) => {
    setSearch(e.target.value)

  }


  return (
    <div className="App">
      
      <header><h2 className='title'>Reddit-Reader</h2></header>
      <br></br>
        <form onSubmit={handleSearch}>
            <input 
              className='searchBar' 
              type='text'
              onChange={handleInputChange}
  
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