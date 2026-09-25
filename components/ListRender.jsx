import React from 'react'
import {useState} from 'react';

const ListRender = () => {
   // const [list] = useState(['Caio','Gustavo','Bernardo']);
    const [users,setUsers] = useState([
        {
            id: 1, name: 'Caio', age: 24
        },
        {
            id:2, name:'Bernardo', age: 23
        },
           {
            id:3, name:'Gustavo', age: 29
        }
    ]);
    const deleteRandom = ()=>{
        const randomNumber = Math.floor(Math.random()*4);
        setUsers((prevUsers)=>{
            console.log(prevUsers);
            return prevUsers.filter((user)=> randomNumber !== user.id);
        });
    };
  return (
    <div>
     
  {/*  
   <ul>
            {list.map((item)=>(
                <li>{item}</li>
            ))}
        </ul>
        */}

        <ul>
            {users.map((user) =>(
                <li key={user.id} >
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandom} >Delete algum usuário aleatório</button>
    </div>
  )
}

export default ListRender