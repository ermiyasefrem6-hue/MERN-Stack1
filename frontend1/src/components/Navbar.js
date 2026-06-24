import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/Register">
          <h3>Register</h3>
        </Link>
        <Link to="/Studentlist">
          <h3>Studentlist</h3>
        </Link>
        <Link to="/Gallery">
        <h3>Gallery</h3>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
