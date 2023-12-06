import React from 'react'
import { data } from './data'
const Birthday_Data = ({image,age,name,rem,id }) => {
  return (
    <>
    <div className="contrainer">
        <div className="d-flex justify-content-between align-items-center">
            <div className="left d-flex gap-3">
                <img style={{width: '70px',height:'70px',borderRadius:'50%', objectFit:'cover'}} src={image} alt="" />
                <div className="info">
                <h5>{name}</h5>
                <h6>{age} Years</h6>
                </div>
            </div>
            <div className="right">
                <button onClick={()=>rem(id)} className="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Birthday_Data