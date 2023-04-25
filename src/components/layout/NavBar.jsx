import { Link } from 'react-router-dom'

const NavBar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <Link to="/">
          {icon} {title}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}

NavBar.defaultProps = {
  title: 'Contact Keeper',
}

export default NavBar
