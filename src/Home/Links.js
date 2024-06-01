import { NavLink } from "react-router-dom";
// import Auth from "../Pages/Auth";
const Links=()=>{
    return(
        <div>
            <nav>
              
                    
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/Auth" >Auth Link</NavLink>
                    <NavLink to="/Costumer" >Costumer</NavLink>
                    <NavLink to="/Engineer" >Engineer</NavLink>
                   
            </nav>
        </div>
    )
}
export default Links;