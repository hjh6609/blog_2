import { Link } from "react-router-dom";
import "./topbar.css"
//rfc

export default function TopBar() {
  const user = true;
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-instagram"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
          <li className="topListItem">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
          <Link className="link" to="/write">
            WRITE
          </Link>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
      {user ? (
          <Link className="link" to="/settings">
            <img 
              className="topImg"
              src={`${process.env.PUBLIC_URL}/imgs/jeamin.jpg`} 
              alt="" 
            />
          </Link>
        ):(
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}  
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

