import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBInput
  } from 'mdb-react-ui-kit';
  const axios = require('axios').default;
  import { router, useRouter } from 'next/router';
  import Link from 'next/link'; 
  import { useState } from 'react'; 
 


export default function addNewHero() {
  const [form, setform] = useState({
    superHero : '',
    realName : ''
  })
  
  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name] : e.target.value
    })
  }
  const handleForm = async(e) => {
    e.preventDefault()
    try {
      const res = await axios('http://localhost:3000/api/hero',{
        method : "Post",
        headers : {
          "Content-Type" : "application/json"
        },
        data : JSON.stringify(form)
      })
      router.push('/')
    } catch (error) {
      console.log(error)      
    }
  }

  return (
    <div className="container">
       <h1 className="display-3"> Add a new hero Identity</h1>
       <form onSubmit={handleForm}>
        <MDBInput
        onChange={handleChange}
        label = 'SuperHero'
        type='text'
        name='superHero'
        />
        <MDBInput
        className='my-2'
        onChange={handleChange}
        label = 'Realname'
        type='text'
        name='realName'
        />
        <MDBBtn type='submit'>Add New Hero</MDBBtn>
       </form>
    </div>
  )
}
