import React from 'react';

function Tab({name, colour}) {
  console.log(name)
  return (
    <div className={`tab ${colour}`}>
      <h2 className='tab-header'>{name}</h2>
      {name !== "User" ? <button>Close</button> : <></>}
    </div>
  )
}



export default Tab
