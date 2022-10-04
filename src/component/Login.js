import React from 'react'
import './login.css'
import {Link} from 'react-router-dom'
import { useState } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { saveData } from "../redex/action";
function Login() {
  const [roomNumber, setRoomNumber] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [data, setData] = useState();
  let dispatch = useDispatch();
  let dataState = useSelector((state) => {
    return state.sar;
})
  return (
    <div className ='logincontainer'>
        <div className='mainlogin'>
        <input type='text'  placeholder="Enter Phone No." className='login1'></input><br></br>
        <input type = 'number' placeholder='Enter Room' className='login1'></input><br></br>
        
       <button className='submit'  onClick={() => {     
          dispatch(saveData({userNumber:phoneNumber,data}));
          console.log("Final Data",dataState );}}>
            Submit</button>
    </div>
    </div>
    
  )
}

export default Login