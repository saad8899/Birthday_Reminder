import React, { useState } from 'react'
import Birthday_Data from './Birthday_Data'
import { data } from './data'

const Birthday = () => {
  const [info, setinfo]= useState(data)
  const removePerson = (id)=>{
    const newList = info.filter((item)=>{
      return item.id !== id
    })
    setinfo(newList)
  }
  return (
    <>
    <div className='container my-5 shadow col-lg-7 py-3'>  
    <h1 className='text-center'> {info.length} Birthday Reminder </h1>
    {info.map((item)=>{
        return <Birthday_Data key={item.id} {...item} rem={removePerson}/>
    })}

    {info.length ==0 ? (<button onClick={()=>setinfo(data)} className="btn btn-success my-1 w-100">Refresh all</button>) : (<button onClick={()=>setinfo([])} className="btn btn-danger my-1 w-100">Remove all</button>
)}
    </div>
    
    </>
  )
}

export default Birthday