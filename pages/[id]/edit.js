import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn,
    MDBInput
  } from 'mdb-react-ui-kit';
  const axios = require('axios').default;
  import { Router, useRouter } from 'next/router';
  import Link from 'next/link'; 
  import { useState } from 'react'; 
 


export default function EditHero({heros}) {
    const router = useRouter()
    const heroId = router.query.id
  const [form, setform] = useState({
    superHero : heros.superHero,
    realName : heros.realName
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
      const res = await axios(`http://localhost:3000/api/hero/${heroId}`,{
        method : "PUT",
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
        value={form.superHero}
        />
        <MDBInput
        className='my-2'
        onChange={handleChange}
        label = 'Realname'
        type='text'
        name='realName'
        value={form.realName}
        />
        <MDBBtn type='submit'>Edit Hero</MDBBtn>
       </form>
    </div>
  )
}
export async function getServerSideProps({params}) {
    const id = params.id
    const res = await axios(`http://localhost:3000/api/hero/${id}`)
    const {hero}= res.data;    
    return {
      props: {heros : hero}, // will be passed to the page component as props
    }
}