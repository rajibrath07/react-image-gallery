import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import data from './components/data'

function App() {
  return (
    <>
      <Header/>
      {data.map((val)=>{
        return <Card
        key = {val.id}
        imgsrc = {val.imgsrc}
        title = {val.title}
        name =  {val.manme}
        link = {val.link}
        />
      })}
    </>
  )
}

export default App
