import React, { useState, useEffect } from "react";
import { DatePicker, Space } from 'antd';
import { Row, Col, Card } from "antd"
import { Select, Input as AntdInput } from 'antd';
import IceCreamModal from './icecreamModal'
import ErrorModal from './errorModal'
import thelogo from "../images/logo1.png"
import sideimg from "../images/thesideimg.png"
import "./layout.css"
import 'antd/dist/antd.css';



const Input = ({
    setpage,
    setDatevalue,
    dateValue,
    handleChangeText,
    value,
    setselected,
    message,
    selected,
    dropDownValue,
    onChangeThemes,
    themesValue,
    name,
    setname,
    email,
    setemail,
    number,
    setnumber,
    type,
    settype,
    themsg,
    setmsg,
    date,
    setdate,
    selectIcecream,
    setSelectedIcecream,
    ...props
}) => {
    console.log("props", props);
    const [visible, setVisible] = useState(false)
    const [visibleError, setVisibleError] = useState(false)
    useEffect(()=> {
      document.body.style.backgroundImage = "url('/backgroundimg.jpg')";
    },[])
    function onChange(value) {
        console.log(`selected ${value}`);
        settype(value)
    }
    const { Option } = Select;

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }

    function onSearch(val) {
        console.log('search:', val);
    }
    const onChange1 = (date, dateString) => {
        console.log(date, dateString);
        console.log("thedata" + dateString)
        setdate(dateString)
    }

    const onCancel = () => {
      setVisible(false)
    };

    const onSelectIcecream = ic => {
      setSelectedIcecream(ic)
      setVisible(false)
    }

    const nextStep = ()=>{
      debugger
      if (!name || !email|| !number || !date || !themsg || !selectIcecream?.name) {
        setVisibleError(true)
        return
      }
      setpage(2)
    }

    console.log()

    return (
        <div>
            <img className="center-img" src={thelogo} alt="mainimg" />
            <Row>
                <Col sm={12}>
                    <Card className="theform">
                        <h1>Pick Your Date</h1>
                        <p>Always Handmade. Always from Scratch. Always Local..</p>
                        <Row>
                            <Col sm={12}>
                                <label htmlFor="Name" />
                                <input className="formfields" type="text" value={name} name="name" placeholder="Your Name" onChange={(e) => setname(e.target.value)} />
                                <br /><br />
                                <label htmlFor="PhoneNumber" />
                                <input className="formfields" type="number" value={number} name="phonenumber" placeholder="Phone Number" onChange={(e) => setnumber(e.target.value)} />
                            </Col>
                            <Col sm={12}>
                                <label htmlFor="Email" />
                                <input className="formfields" type="email" name="emailid" value={email} placeholder="Your Email" onChange={(e) => setemail(e.target.value)} />
                                <br /><br />
                                <Space direction="vertical">
                                    <DatePicker onChange={onChange1} className="thedate" />
                                </Space>
                            </Col>
                            <br /><br />
                            <Col sm={24}>
                                <input onKeyDown={e=>{e.preventDefault(); return false}} placeholder={selectIcecream?.name ?`${selectIcecream?.name || ''} ${selectIcecream?.cost ? `(${selectIcecream.cost}$)`:''}`:'select icecream'} className="formfields" onClick={()=>setVisible(true)} style={{ width: "95%", marginTop: "20px" }}/>
                                <br /><br />
                            </Col>

                            <textarea spellCheck={true} id="w3review" className="message-sty" name="message" rows="4" cols="50" value={themsg} placeholder="Your Message..." onChange={(e) => setmsg(e.target.value)}>
                            </textarea>
                            <br /><br />
                            <button className="btn-sty" type="submit" onClick={() => nextStep()}>Review</button>
                        </Row>
                    </Card>
                </Col>
                <Col sm={12}>
                    <img src={sideimg} alt="sideimage" className="image-sty" />
                </Col>
            </Row>
            <IceCreamModal visible={visible} onCancel={onCancel} onSelectIcecream={onSelectIcecream} />
            <ErrorModal visible={visibleError} onCancel={()=>setVisibleError(false)} onSelectIcecream={onSelectIcecream} />

        </div>
    );
}

export default Input;
