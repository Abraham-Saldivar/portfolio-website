import { useState } from "react";
import { useEffect } from "react";
import { Typography, Box, Button } from "@mui/material";

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <>
      <Box display="flex" justifyContent="flex-end" flexDirection="row">
        {" "}
        <Button href="/">Go Home</Button>{" "}
        <Box display="flex" justifyContent="flex-end" flexDirection="row">
          <Typography> the time is currently: {clockState}</Typography>
        </Box>
      </Box>
    </>
  );
}
export default Clock;
