import React, {useEffect} from "react";
import thelogo from "../images/logo1.png"
import { Row, Col, Card } from "antd"



function Output({ dateValue, state, setpage, message, name,  email,  number, type,
  themsg,
  setmsg,
  date,
  selectIcecream,
  ...props }) {
  useEffect(()=>{
    if (selectIcecream?.avatar) {
      document.body.style.backgroundImage = "url('"+selectIcecream?.avatar+"')";
    }
  },[])
  return (
    <div>
      <img className="center-img" src={thelogo} alt="mainimg" />
      <Card>
        <h1>Please review your details, {name}</h1>
        <h3><u>Confirmation message:</u></h3>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Mobile Number: {number}</p>
        <p>Delivery Date: {date}</p>
        <p>IceCream: {`${selectIcecream?.name} (${selectIcecream.cost}$)`}</p>
        <p>Message: {themsg}</p>
        <p>Reference Number: {new Date().getTime()}</p>
      </Card>
      <button className="btn-sty" type = "submit" onClick={() => setpage(1)}>
        Back
       </button>
       <button className="btn-sty" type = "submit" onClick={() => setpage(3)}>
        Submit
       </button>
    </div>
    
  );
}

export default Output;
