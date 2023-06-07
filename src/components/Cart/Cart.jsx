import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { RemoveItem } from "../../reducers/ItemSlice";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

const Cart = () => {
  const [checkoutErrorMsg,setCheckoutErrorMsg]=useState("");
    const thali=useSelector(state=>state.counter.thali);
    const dispatch=useDispatch();

    const removeItemHandler=(id)=>{
dispatch(RemoveItem(id));
};  
const navigate = useNavigate();
return (
        <>
            <table class="table caption-top table-hover">
  <caption>Your Order</caption>
  <thead class="table-dark">
    <tr>
      <th scope="col">Picture</th>
      <th scope="col">Item Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
      <th scope="col">Remove Item</th>
    </tr>
  </thead>
  <tbody>
    {thali.map((item,id)=>(
        <tr key={id}>
      <th scope="row"><img src={item.image} style={{ height: "100px", width: "100px" }} /></th>
      <td>{item.name}</td>
      <td>1</td>
      <td>{item.price}</td>
      <td><AiFillDelete onClick={()=>{removeItemHandler(id)}}/></td>
    </tr>
    ))}
  </tbody>
</table>
<div>
<button type="button" class="btn btn-primary" onClick={()=>{
  if(thali.length <2){
    alert("Select atlest 2 items!!");
  }else{
    navigate('/checkoutpage');
  }
}}>Checkout</button>
</div>
        </>
    );
};

export default Cart;