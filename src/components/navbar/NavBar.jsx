import "./navbar.css"
import {Link} from 'react-router-dom';


export default function NavBar(){
    return(
        <>
            <div className="navContainer">
                <div className="navWrapper">
                     <img src="assets/logo.png" alt="" className="logo"/>
                      <div className="navListWrapper">
                          <ul className="navList">
                              <li className="navListItem"><Link to="/">Home</Link></li>
                              <li className="navListItem"><Link to="/journey">Our Journey</Link></li>
                              <li className="navListItem"><Link to="/about">About</Link></li>
                              <li className="navListItem"><Link to="/gallery">Gallery</Link></li>
                          </ul>
                      </div>
                       <button className=" apply"><a href="https://www.alueducation.com/apply-now/">Apply Now</a></button>
                </div>
            </div>

        </>
    )
}