import { NavLink } from "react-router-dom"
// import RepoDetails from "../pages/RepoDetails";
import '../App.css'

function NavBar() {
  
  return (
    <nav className="navbar-nav">
      <ul className="navbar-ul">
        <li>
        <NavLink to="/" className='home'>Home</NavLink>
        </li>
        <li>
        <NavLink to="/repo-page" className='repo-details'>Repo Details</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar;