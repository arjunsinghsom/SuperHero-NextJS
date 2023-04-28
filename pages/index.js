import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn
} from 'mdb-react-ui-kit';
import Link from 'next/link';
const axios = require('axios').default;



 const index = ({heros})=> {
  return (
    <div className="container">
    <h1 className="display-2"> Superhero Identity Manager </h1>
    <div>
    {heros.map(hero => {
      return(
        <MDBCard className='border border-2 my-2' style={{maxWidth : '22rem'}}>
        <MDBCardBody>
          <MDBCardTitle>{hero.superHero} </MDBCardTitle>
          <MDBCardText>
            Reveal Identity
          </MDBCardText>
        <Link href={`/${hero._id}`}><MDBBtn className='mx-2'>View Hero</MDBBtn></Link>
        <Link href={`/${hero._id}/edit`}><MDBBtn>Edit Hero</MDBBtn></Link>
        </MDBCardBody>
      </MDBCard>
      )
    })}
    
    </div>
    </div>
  )
}
export async function getServerSideProps(context) {
  const res = await axios('http://localhost:3000/api/hero')
  const {hero}= res.data;
  return {
    props: {heros : hero}, // will be passed to the page component as props
  }
}
export default index