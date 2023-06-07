import React from 'react';
import { useSelector } from "react-redux";

const Checkout = () => {
  const thali = useSelector(state => state.counter.thali);
  var sum = 0;
  for (const item of thali) {
    sum = sum + item.totalPrice;
  }
  return (
    <div style={{display: "flex",
      justifyContent: "center"}}>
      <div class="col-md-5 col-lg-4 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Your cart</span>
          <span class="badge bg-primary rounded-pill">{thali.length}</span>
        </h4>
        <ul class="list-group mb-3">
        {thali.map((item,id)=>(
          <li key={id} class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">{item.name}</h6>
              <small class="text-muted">{item.description}</small>
            </div>
            <span class="text-muted">{item.price}</span>
          </li>))}
        </ul>
        <span class="text-primary">Total Price: {sum}</span>
      </div>
      </div>
      );
};

      export default Checkout;