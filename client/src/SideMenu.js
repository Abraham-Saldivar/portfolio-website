import { Drawer, Typography, Box, IconButton, Button } from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LinkSideBar from "./LinksSideBar";

function SideMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <Box display="flex" justifyContent="space-between" flexDirection="row">
        {" "}
        <IconButton onClick={() => setIsDrawerOpen(true)}>
          <MenuIcon fontSize="large" />
        </IconButton>
      </Box>
      <Box>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
        >
          <Box p={2} width="250px" textAlign="center" role="presentation">
            <LinkSideBar />
          </Box>
        </Drawer>
      </Box>
    </>
  );
}
export default SideMenu;
