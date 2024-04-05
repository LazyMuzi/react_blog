import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  let [title, func] = useState(['Unity', 'Unreal', 'React']);

  return (
    <div className="App">
      <div className='black-nav'>
        <div style={ {fontSize : '30px' }}>개발 Blog</div>  
      </div>
      <div className='list'>
        <h3>{ title[0] }</h3>
        <p> 유니티 </p>
        <hr/>
        <h3>{ title[1] }</h3>
        <p> 언리얼 </p>
        <hr/>
        <h3>{ title[2] }</h3>
        <p> 리액트 </p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
