import Link from "next/link";
import { MDBBtn } from "mdb-react-ui-kit"; 

export default function Navbar() {
  return (
    <nav className="navbar container">
    <Link href="/">
    <p className="navbar-brand"> Superhero Identity </p>
    </Link>
    
    <Link href="/add">
    <MDBBtn>New Identity</MDBBtn>
    </Link>
    </nav>
  )
}
