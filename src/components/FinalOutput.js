import React from "react";
import thelogo from "../images/logo1.png"
import { Row, Col, Card } from "antd"



function FinalOutput({date, ...props}) {
     
    return (
        <div>
                        <img className="center-img" src={thelogo} alt="mainimg" />
            <Card>
         <h1>Thank you for your details</h1>
         <p>Your order will be delivered on {date}</p>
         <p>If you have any queries you can contact us just my mentioning the Reference Number: {new Date().getTime()}</p>
         <br/>
         <button className="btn-sty" type="submit" onClick={() => window.location.reload(false)}>New Order</button>
         <br/>
         <br/>
         
         <h1>Github Repository Link : https://github.com/AnuragKurapati/IceCream-Delivery </h1>
         <br/>
         

            </Card>
        </div>
    )
}

export default FinalOutput;
