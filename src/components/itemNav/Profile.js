import { Link } from "react-router-dom";

const Profile = () => {
   
  
  return (
    <div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <img alt="" src="https://placeimg.com/80/80/people" />
      </div>
    </label>
    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
        <Link to="/login">
          Profile
        </Link>
      </li>
      <li><Link to="/login">Settings</Link></li>
      <li><Link to="/login">Logout</Link></li>
    </ul>
  </div>
 )
}

export default Profile;