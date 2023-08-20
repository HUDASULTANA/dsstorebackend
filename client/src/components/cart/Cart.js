import React, { useContext, useEffect,useState} from 'react';
import './cart.css';
import {CircularProgress, Divider} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { Logincontext } from '../context/Contextprovider';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { NavLink } from 'react-router-dom';


const Cart = () => {


const {id} = useParams("");
// console.log(id);
const history = useNavigate("");

const{account, setAccount} = useContext(Logincontext);

const [inddata,setInddata] = useState("");
console.log(inddata);

const getinddata = async()=>{
  const res = await fetch(`/getproductsone/${id}`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    }
  });
  const data = await res.json();
  // console.log(data);
  if(res.status !== 201){
    console.log("no data available");
  }else{
    console.log("get data");
    setInddata(data);
  }
}
useEffect(()=>{

  setTimeout(
    getinddata,1000)
  
  
},[id]);
//add cart function
const addtocart = async (id)=>{
  const checkres = await fetch(`/addcart/${id}`,{
    method:"POST",
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      inddata
    }),
    credentials:"include"
  });

  const data1 = await checkres.json();
  console.log(data1);
  if(checkres.status === 401 || !data1){
    console.log("user invalid");
    alert("user invalid");
  }else{
    // alert("data added in your cart");
    history("/buynow")
     setAccount(data1)
  }
}



  return (
    <div className='cart_section'>
    { inddata && Object.keys(inddata).length &&
      <div className='cart_container'>
        <div className='left_cart'>
<img src={inddata.url}/>
<div className='cart_btn'>
   














{/* {
  account ? <NavLink to="/buynow"><div className="cart_btn">
<Badge badgeContent={account.carts.length} color="primary">

<ShoppingCartIcon id ="icon"/>
</Badge><p>Cart</p></div> </NavLink>
: 
<NavLink to="/login">
<div className="cart_btn">
  <Badge badgeContent={0} color="primary">
    <ShoppingCartIcon id="icon"/>
  </Badge>
 
  <p>cart</p>
  </div>
</NavLink>
} */}






{
  account ?<button className='cart_btn1' onClick={()=>addtocart(inddata.id)}>

    <FavoriteBorderIcon style={{width:"14px"}}/>
       Add to Wishlist 
      <FavoriteBorderIcon style={{width:"14px"}}/>
    </button>:
<NavLink to='/login'>
      <button className='cart_btn1' >

    <FavoriteBorderIcon style={{width:"14px"}}/>
       Add to Wishlist 
      <FavoriteBorderIcon style={{width:"14px"}}/>
      </button></NavLink>
}










{
  account ?<NavLink to="/lastpage"><button className='cart_btn2'>
        <FavoriteBorderIcon style={{width:"15px"}}/>Buy Now<FavoriteBorderIcon style={{width:"15px"}}/>
    </button></NavLink>:
    <NavLink to="/login"><button className='cart_btn2'>
        <FavoriteBorderIcon style={{width:"15px"}}/>Buy Now<FavoriteBorderIcon style={{width:"15px"}}/>
    </button></NavLink>

}








     
</div>
        </div>
        <div className='right_cart'>
        <h3>{inddata.title.shortTitle}</h3>
       
        <h4>{inddata.title.longTitle}</h4>
        <Divider/>
        <p className="mrp">M.R.P. : Rs.{inddata.price.mrp}</p>
        <p>Deal of the day: <span style={{ color:"#B12704"}}>
            rs.{inddata.price.cost}.00
        </span> </p>
        <p>You Save :: <span style={{color:"#B12704"}}>Rs.{inddata.price.mrp - inddata.price.cost} ({inddata.price.discount})</span></p>
        <div className='discount_box'>
            <h5>Discount: <span style={{color:"#692158"}}>{inddata.discount}</span></h5>
            <h4>Free Delivery : <span style={{color:"#692158",fontWeight:600}}>Aug 23-25</span>Details</h4>
            <p>Fastest delivery:<span style={{color:"#692158",fontWeight:600}}>Tomorrow 11AM</span></p>
        </div>
        <p className='description'>About the Item:<span style={{color:" #b33996",fontSize:14,fontWeight:500,letterSpacing:"0.4px"}}>{inddata.description}</span>
        </p>

        </div>
      </div>}
      {!inddata ? <div className='circle'>
    <CircularProgress/>
    <h2>Loading...</h2>
  </div>:""}
    </div>
  )

  

}

export default Cart
