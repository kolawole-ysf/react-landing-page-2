import "./Navbar.css"
import { useState } from "react"
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = ({ navlinks }) => {
    const [toggle, setToggle]=useState(false)
   
  return (
    <div className="header">
        <div className="navbar">
            <span className="logo">ENIKOL <span style={{color: 'green', fontWeight: 'bold'}}>Properties</span></span>
            {toggle? <span className="toggle"><FaBars onClick={()=>{
                setToggle(!toggle)
            }} style={{fontSize: 32, color: 'black'}} /></span> : <span className="toggle"><FaTimes onClick={()=>{
                setToggle(!toggle)}} style={{fontSize: 32, color: 'red'}} /></span>}
            <div className={toggle? "navlist" : "navlist active"}>
                <ul>
                    { navlinks.map(navlink=>{
                        return <li key={navlink.id}><a href={navlink.url} className={navlink.active}>{navlink.value}</a></li>
                    })}
                    
                </ul>
                <span className="btn">Buy or Sell Properties</span>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
