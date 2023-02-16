import{Link} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../pages/CartContext";

function Navigation()
{
const cartStyle={
background:"#FFB72B",
display:"flex",
padding:"6px 12px",
borderRadius:"50px",
}
const navStyle={
  background:"#FEFBE7"
}

const {cart}= useContext(CartContext);
return (
<>
<nav  style={navStyle} className="container mx-auto flex items-center justify-between py-3">

<Link to="/">
<img style={{height:100,width:100}} src="/images/logooo.png" alt="Home"/>
</Link>

<ul  className="  mr-20 flex items-center ">
     <li className="font-semibold">  <Link to="/">Home </Link></li>
           <li className="ml-4 font-semibold" >  <Link to="/products">Product </Link>
                                                                      </li>

  <li className="ml-4 font-semibold" >  <Link to="/Register">Register</Link>
                                                               </li>
               <li className="ml-4 font-semibold" >  <Link to="/LogIn">Sign In</Link>
                                                                </li>
    <li className="ml-4 font-semibold" >  <Link to="/About">About Us</Link>
                                                                     </li>
              <li className="ml-4" >  <Link to="/cart">
     <div style={cartStyle}>
                  <span>{cart.totalItems ?cart.totalItems : 0} </span>

       <img className="ml-1" src="/images/cart.png" alt="Cart"/>
</div>
          </Link>
              </li>
</ul>




</nav>

  </>
)

}

export default Navigation;
