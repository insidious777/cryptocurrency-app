import './App.css';
import Card from './Card'
import {useState, useEffect} from 'react'
import axios from 'axios';
import loadingImg from './loading.svg'
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    axios.get('http://localhost:3001').then(response=>response).then(cur=>{setData(cur.data.data);setLoading(false);});
  },[]);

  return (
    <div className="App">
      <header>
        <h1>Cryptocurrency app</h1>
      </header>
      <div className="content">
       {loading?<img className="loading" src={loadingImg}/>:data.map((el,i)=><Card key={i} item={el}/>)}
      </div>
    </div>
  );
}

export default App;
