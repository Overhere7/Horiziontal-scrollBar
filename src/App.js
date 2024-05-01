import React from 'react'
import './App.css';
export default function App() {
        let arr = [];
      for (let i=1 ; i<=35; i++){
        arr.push(i);
      } 
      const handleRight = ()=>{
        document.getElementById("display").scrollLeft+=208.5

      }
      const handleLeft = ()=>{
        document.getElementById("display").scrollLeft-=208.5
      }

  return (
    <>
    <div className='DisplayBar' id='display'>
      {arr.map((ele) => <div ><div className='numbers'>{ele}</div></div>)}
    </div>
    <button class='leftbtn' onClick={handleLeft}>Left</button>
    <button class='rightbtn' onClick={handleRight}>Right</button>
    </>
  )
}
