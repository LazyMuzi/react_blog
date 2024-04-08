/* eslint-disable */

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title, titleFunc] = useState(['Unity', 'Unreal', 'React']);
  let [idx, idxFunc] = useState(0);
  let [good, goodFunc] = useState(0);
  let [modal, modalFunc] = useState(false);

  return (
    <div className="App">
      <div className='black-nav'>
        <div style={ {fontSize : '30px' }}>개발 Blog</div>  
      </div>
      <div className='list'>
        <h3 onClick={() => {idxFunc(0)}}> {title[0]} <span>👍🏽</span></h3>
        <hr/>
        <h3 onClick={() => {idxFunc(1)}}> {title[1]} <span>👍🏽</span></h3>
        <hr/>
        <h3 onClick={() => {idxFunc(2)}}> {title[2]} <span>👍🏽</span></h3>
        <hr/>
      </div>

      
      <Modal title = {title} idx = {idx}></Modal>
      {/* <div>
        <button onClick={() => {modalFunc(!modal)}}>상세 창 열기</button>
        {
          modal===true?
          <Modal/>
          : null
        }
      </div> */}
      
      
    </div>
  );
}

function Modal(props){ // component 만듦
  return(
    <>
    <div className='modal'>
        <h2>{props.title[props.idx]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}
export default App;
