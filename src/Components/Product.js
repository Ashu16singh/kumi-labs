import {Link} from "react-router-dom";
import {useContext , useState} from "react";
import {CartContext} from "../pages/CartContext";

const Product = (props) => {

const [isAdding , setIsAdding]= useState(false);

const {cart,setCart} =useContext(CartContext);

const {product} = props;

const addToCart=(event, product) => {
  event.preventDefault();

           let _cart={...cart};
                  if(!_cart.item){  //item:{empty}

  _cart.item={}
}

           if(_cart.item[product._id])
           {
     _cart.item[product._id] +=  1;
}
 else{

  _cart.item[product._id]=1;

}
if(!_cart.totalItems)
{
  _cart.totalItems = 0;
}
  _cart.totalItems += 1;

setCart(_cart);
setIsAdding(true);
setTimeout(()=>{

  setIsAdding(false);
},1000);
}


  return(
<Link to={"/products/${product._id}"}>

<div>
 <img src={props.product.image} alt="pizza"/>
 <div className="text-center">
 <h2 className="text-lg font-bold py-2 ">{props.product.name}</h2>
 <span className=" bg-gray-200 py-1 rounded-full text-sm px-4">{props.product.size}</span>
 </div>

 <div className="flex justify-between items-center mb-15 mg-5">
<span className="mt-4">₹{props.product.price}</span>
<button disabled={isAdding} onClick={(e) => { addToCart (e, product)}} className={`${ isAdding ? "bg-green-500" :"bg-yellow-500"} px-6 py-2 rounded-full font-bold mt-4 `}>Add{ isAdding ?"ed" : ""}</button>
   </div>
    </div>
    </Link>
  )
}


export default Product;
