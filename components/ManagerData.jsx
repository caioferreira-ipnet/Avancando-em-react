import React from 'react'
import{useState} from'react'
const ManagerData = () => {
    let someData =10;
    const[number,setNumber] = useState(20);
  return (
    <div>{number}
    <button onClick={()=>setNumber(15)} >Mudar variável</button>
    </div>
  )
}

export default ManagerData