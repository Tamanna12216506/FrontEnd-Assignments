import { NavLink} from "react-router";

const Header = () => {
  return (
    <div>
      <h2>My Website</h2>
      <nav>
        <NavLink to="/">Home |</NavLink>
        <NavLink to="/about">About |</NavLink>
        <NavLink to="/contact">Contact </NavLink>
      </nav>
    </div>
  )
}

export default Header