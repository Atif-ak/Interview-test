import React from 'react'
import './Navbar.css'


const contents = ['Agri-Purchase Management','Agri-Input Master Maintenance','Supplier Master Maintenance','Agri-Input Purchase Requests']

const Navbar = ()=>{
    console.log(window.location.pathname)
    return (
        <nav className="nav">
            <ul className="list">
                {
                contents.map((content,ind)=> {
                    return(
                      <>  <li key={ind} 
                      id={window.location.pathname==`/${content}` ? "active" : ""}
                      onClick={()=> window.location.pathname=content} className="innerList">{content}</li><hr id="line"></hr></>
                    )
                })  
            }
           
            <div className="bottom">Tax Master Maintenance</div></ul>
        </nav>
    )
}
 
export default Navbar