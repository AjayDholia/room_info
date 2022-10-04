import { TextField, Button } from "@mui/material";
import { useState } from "react";
const SwitchDetail = (props) => {
  const { switchIdx, roomIdx, data, setData } = props;
  const [fans, setFans] = useState();
  const [light, setLight] = useState();
  const [heavy, setHeavy] = useState();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        // border: "1px solid black",
      }}
    >
      <TextField
        id="outlined-required"
        label={`Switch ${switchIdx + 1}`}
        disabled
        sx={{
          mb: 2,
            backgroundColor:"white",
            botderRadius:"15px",
        }}
      />
      <TextField
        id="outlined-required"
        label="Enter Number of fans"
        type={Number}
        //   disabled={isSubmit}
        //   defaultValue={0}
        onChange={(e) => {
          setFans(e.target.value);
        }}
        sx={{
          mb: 2,
            backgroundColor:"white",
            botderRadius:"15px",
        }}
      />
      <TextField
        id="outlined-required"
        label="Enter Light Load"
        type={Number}
        //   disabled={isSubmit}
        //   defaultValue={0}
        onChange={(e) => {
          setLight(e.target.value);
        }}
        sx={{
          mb: 2,
            backgroundColor:"white",
            botderRadius:"15px",
        }}
      />
      <TextField
        id="outlined-required"
        label="Enter Heavy Load"
        type={Number}
        //   disabled={isSubmit}
        //   defaultValue={0}
        onChange={(e) => {
          setHeavy(e.target.value);
        }}
        sx={{
          mb: 2,
            backgroundColor:"white",
            botderRadius:"15px",
        }}
      />
      <Button
        variant="contained"
        onClick={() => {
          let appliances = {
            fans: fans,
            lightLoad: light,
            heavyLoad: heavy,
          };

          let newData = data;
          newData[roomIdx].switchboards[switchIdx].appliances = appliances
          setData([...newData])
        }}
      >
        Enter
      </Button>
    </div>
  );
};

export default SwitchDetail;
