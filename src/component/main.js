import { TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import SwitchBoard from "./switchBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useSelector,useDispatch} from 'react-redux'
import { saveData } from "../redex/action";
import Header from "./Header";
import './login.css'
const Main = () => {
  const [roomNumber, setRoomNumber] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [data, setData] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  let dispatch = useDispatch();
  let dataState = useSelector((state) => {
    return state.sar;
})

  console.log(data);
  return (
    
    <div>
      <Header/>
      <div className ='logincontainer'>
        <div className='mainlogin'>
        <input type='text'  placeholder="Enter Phone No." className='login1'  disabled={isSubmit}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}></input><br></br>
        <input type = 'number' placeholder='Enter Room' className='login1'   disabled={isSubmit}
          //   defaultValue={0}
          onChange={(e) => {
            setRoomNumber(e.target.value);
          }}></input><br></br>
        
       
    </div>
    </div>
      {isSubmit ? (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              
            }}
          >
            {data.map((ele, idx) => {
              return <SwitchBoard idx={idx} data={data} setData={setData} />;
            })}
          </Box>
        
        </>
      ) : (
        <Button
          variant="contained"
          className="submit"
          sx={{    width: "15%",
               marginLeft: "42%",
            marginBottom: "7%",
            marginTop: "-18%"}}
          onClick={() => {

            let newArray = [];
            newArray[roomNumber - 1] = 2;
            newArray.fill(2);
            let newData = newArray.map((ele, idx) => {
              return {
                roomNumber: idx + 1,
                switchboards: [],
              };
            });
            setData(newData);
            setIsSubmit(true);
          }}
        >
          sumbit
        </Button>
      )}
    </div>
  );
};

export default Main;
