import React, { useState, useRef, useEffect } from "react";
import Input from "./Input";
import Output from "./Output";
import FinalOutput from "./FinalOutput"
import { useSelector, useDispatch } from "react-redux";
import { addTheme } from "store/themesReducer";

function Main(props) {
  const [page, setpage] = useState(1);
  const [name ,setname] = useState("")
  const [email, setemail] = useState("")
  const [number, setnumber] = useState("")
  const [type, settype] = useState("")
  const [themsg, setmsg] = useState("")
  const [date, setdate] = useState("")
  const [dateValue, setDatevalue] = useState("");
  const [textAreaValue, settextAreaValue] = useState({ value: "" });
  const [value, setValue] = useState("");
  const [selected, setselected] = useState("message");
  const DiffValue = useRef(null);
  const [message, setmessage] = useState([]);
  const [selectIcecream, setSelectedIcecream] = useState({})
  const [themesValue, setthemesValue] = useState("darkTheme");
  const dispatch = useDispatch();
  useEffect(() => {
    DiffValue.current = value;
  });
  let onChangeThemes = (e) => {
    setthemesValue(e.target.value);
    dispatch(addTheme(e.target.value));
  };
  let handleChangeText = (value) => {
    let difference = value.split(DiffValue.current).join("");
    if (selected === "bold") {
      setmessage(() => {
        return [...message, <b>{difference}</b>];
      });
    } else if (selected === "italic") {
      setmessage(() => {
        return [...message, <i>{difference}</i>];
      });
    } else {
      setmessage([...message, difference]);
    }
    setValue(value);
  };
  let valuesSend = {
    page,
    setpage,
    dateValue,
    setDatevalue,
    textAreaValue,
    settextAreaValue,
    handleChangeText,
    value,
    setselected,
    message,
    selected,
    onChangeThemes,
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
  };
  return (
    <>
      <div>
        {page === 1 && <Input {...valuesSend} {...props} />}
        {page === 2 && (
          <>
            <Output {...valuesSend} {...props} />
          </>
        )}
         {page === 3 && (
          <>
            <FinalOutput {...valuesSend} {...props} />
          </>
        )}
      </div>
    </>
  );
}

export default Main;
