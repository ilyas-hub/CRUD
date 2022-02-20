import React, { useState,useEffect } from 'react'
import { db } from './firebase-config';
import {collection,getDocs,addDoc,updateDoc,doc,deleteDoc} from 'firebase/firestore'


const App = () => {
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db,"users")

const createUser =async () =>{
await addDoc(usersCollectionRef,{name:newName,age:Number(newAge)})
}

const updateUser = async (id,age) =>{
const userDoc=doc(db,"users",id)
const newFields={age:age+1}
 await updateDoc(userDoc,newFields)
}

const deleteUser = async (id,age) =>{
  const userDoc=doc(db,"users",id)
  await deleteDoc(userDoc)
  }

  useEffect(() => {
    
  const getUsers = async () => {
   const data = await getDocs(usersCollectionRef);
   setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
  }
  
  getUsers()
  }, [])
  
  return (
    <>
  <div className='App'>
  <input 
  placeholder='Name...' 
  onChange={(event) => {
    setNewName(event.target.value)
  }}
   />

  <input type="number" 
  placeholder='Age...'
   onChange={(event) => {
    setNewAge(event.target.value)
  }}
   />


  <button onClick={createUser} className='btn-style'>Create User</button>
  {users.map((users) => {
    return (
    <div>
    <h1>Name:{users.name}</h1>
    <h1>Age:{users.age}</h1>
    <button className='btn-style' onClick={
      () =>{updateUser(users.id,users.age);
      }}
      >
      Increase Age
      </button>
      <button className='btn-style' onClick={
      () =>{deleteUser(users.id,users.age);
      }}
      >
      deleteUser
      </button>
     </div>
    );
    })}
    </div>
    </>
  )
}

export default App
