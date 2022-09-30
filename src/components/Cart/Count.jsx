import React, { useEffect, useState } from 'react'

const Count = ({value, setTotalCount,setTotalSum}) => {
    const [num, setNum] = useState(1)
    const [price] = useState(value)
    let totalPrice = price * num

    
    useEffect(()=>{
        setTotalCount(totalPrice)
        setTotalSum(num)
    },[num])
    
  return (
    <>
        <td>{price}</td>
        <td><button onClick={() => {setNum(num+1)}} >+</button>{num}<button onClick={() => {setNum(num-1)}}>-</button></td>
        <td >{totalPrice}</td>
    </>
  )
}

export default Count