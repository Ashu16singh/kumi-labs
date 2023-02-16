import  { useState , useEffect } from "react";
import {useParams ,useNavigate} from "react-router-dom";

const SingleProduct =()=> {

const [product,setProducts]= useState([]);
const params= useParams();
const navigate= useNavigate();

 useEffect(()=>{
fetch("https://star-spark-pasta.glitch.me/api/products/${params._id}")
.then(response=>response.json())
.then(product=>{
  setProducts(product);
});
},[params._id]);


return(

<div className="container mx-auto mt-12">
<button className="mb-12 font-bold" onClick= {()=>{navigate(-1)}} >Go Back</button>

<div className="flex">

  <img  src={product.image}  alt="pizza" />

<div className="ml-16 ">

<h1 className="text-xl font-bold">{product.name}</h1>

<div className="text-md">{product.size}</div>

<div className="font-bold mt-2">{product.price}</div>
<button className=" px-6 py-2 rounded-full font-bold mt-4 bg-yellow-500 hover:bg-yellow-600"> Add to Cart</button>


</div>

</div>
    </div>

)
}

export default SingleProduct;
