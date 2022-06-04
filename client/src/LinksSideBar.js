import { Button } from "@mui/material";
import { Box } from "@mui/system";

function LinkSideBar() {
  return (
    <>
      <Box display="flex" justifyContent="space-between" flexDirection="column">
        <Button href="/">Home</Button>
        <Button href="/work-experience">Work Experience</Button>
      </Box>
    </>
  );
}
export default LinkSideBar;
