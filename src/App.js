
import './App.css';
import { LoadImages,SearchImages } from './component/api';
import Image from './component/image';
import { useState } from 'react';
import { useOnKeyPress } from './component/useOnKeyPress';

function App() {  
  const[query,setQuery]=useState('')
  const[searchQ,setSearch]=useState()
    const data=LoadImages();
    const search =()=>{
      setSearch(query) 
    }
    useOnKeyPress(search,'Enter');
    const searchData=SearchImages(searchQ);
    return (
      <div className="App">
      <div className="search">
        <h1 className='primary'> Image Search Using Unsplash API</h1>
        <input text="text" placeholder="Search Here.." onChange={(event)=>setQuery(event.target.value)}></input>
        <button onClick={search} onKeyDown={search} type="submit" className="srchbtn">Search</button>
      </div>
      <br></br>
      <br></br>
      <div className='picture'>
        {searchQ ? searchData.map((img,key)=>(
          <Image src={img.urls.small}  key={key}/>
        ))  : data.map((img,key)=>(
          <Image src={img.urls.small} key={key}/>
        ))}
      </div>
      <footer>
        <h3> Desiged By &nbsp;
 <span>Ramesh Kanna S &nbsp;</span>|&nbsp;
Email&nbsp;:&nbsp;<a href='mailto:223003080@sastra.ac.in'>223003080@sastra.ac.in</a>
        </h3>
      </footer>
      </div>
    );
    }

export default App;
