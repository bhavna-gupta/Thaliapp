import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { addTothali } from '../../reducers/ItemSlice';
const Items=()=> {

  const [quantity,setQuantity]=useState(1);
  const dispatch=useDispatch();
  const productData=useSelector((state)=>(state.counter.products));

  const addItemHandler=(item)=>{
    item=JSON.parse(JSON.stringify(item));
    item.quantity=quantity;
    item.totalPrice=Number(item.quantity)*Number(item.price);
    dispatch(addTothali(item));
    // console.log(addTothali(item))
  };
  return (
    <div className="container" style={{marginBottom:"80px"}}>
      <Row xs={1} md={2} className="g-4">
      {productData.map((data, id) => (
        <Col key={id}>
          <Card style={{width: "450px",
    alignItems: "center"}}>
            <Card.Img variant="top" src={data.image} style={{width:"400px", height:"400px"}} />
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
              ₹ {data.price}
              </Card.Text>
              <Button variant="primary" onClick={()=>{addItemHandler(data)}}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>
  );
};

export default Items;