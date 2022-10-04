import { TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import SwitchDetail from "./SwitchDetail";
const SwitchBoard = (props) => {
  const { idx, data, setData } = props;
  const [switchNumber, setSwitchNumber] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [roomData, setRoomData] = useState();

  //   console.log("In Switch Board::", idx, roomData);

  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        borderRadius:"15px",
        boxShadow: "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
        backgroundColor:"#6CB4EE",
      }}
    >
      {isSubmit ? (
        <div style={{
          borderRadius:"15px"
        }}>
                  <h1>Room No. {idx + 1}</h1>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {roomData.map((ele, i) => {
            return (
              <SwitchDetail
                switchIdx={i}
                roomIdx={idx}
                data={data}
                setData={setData}
              />
            );
          })}
        </Box></div>
      ) : (
        <>
          <TextField
            id="outlined-required"
            label="Enter Switch Board Number"
            sx={{
              backgroundColor:"white",
              botderRadius:"15px",
            
           }}
            type={Number}
            //   disabled={isSubmit}
            //   defaultValue={0}
            onChange={(e) => {
              setSwitchNumber(e.target.value);
            }}
          />

          <Button
            variant="contained" sx={{ml:"2rem",
                                      height:"1.5rem" , mt:"1rem"         }}
            onClick={() => {
              let newArray = [];
              newArray[switchNumber - 1] = 2;
              newArray.fill(2);
              let newData = newArray.map((ele, idx) => {
                return {
                  switchboardNumber: idx + 1,
                  appliances: {
                    fans: 0,
                    lightLoad: 0,
                    heavyLoad: 0,
                  },
                };
              });
              setRoomData(newData);
              let newData2 = data;
              newData2[idx].switchboards = newData;
              setData([...newData2]);
              setIsSubmit(true);
            }}
          >
            Enter
          </Button>
        </>
      )}
    </div>
  );
};

export default SwitchBoard;
