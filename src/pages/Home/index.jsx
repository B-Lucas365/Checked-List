import React, {useState, useEffect} from 'react'
import './styles.css'
import {Header} from '../../components/Header'
import { Card } from '../../components/Card'

export const Home = () =>{
  const [studentName, setStudentName] = useState()
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({name: '', avatar: ''})
  

  const handleAddStudent = () => {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    setStudents(prevState =>[...prevState, newStudent])
  }
  
  useEffect(() =>{
    fetch('https://api.github.com/users/B-Lucas365')
    .then(response => response.json())
    .then(data => {
      setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    })
  }, [])
  
  return (
    <div className='container'>
        <Header name={user.name} avatar={user.avatar}></Header>

        <input type="text" 
        placeholder='Adicionar...' 
        onChange={(e) =>{setStudentName(e.target.value)}}
        />

        <button type='button' onClick={handleAddStudent}>
          Registrar
        </button>

        {
          students.map(student => <Card key={student.time} name={student.name} time={student.time}/> )
          
        }
    </div>
  )
}


