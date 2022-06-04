import { Typography, Box, Button } from "@mui/material";
import ProfilePicture from "/Users/abrahams/Commissions/project-template-react-rails-api/client/src/Images/Memoji-Transparent.png";
function Home() {
  return (
    <>
      <Box display="flex" justifyContent="center" flexDirection="row">
        <Box
          sx={{
            flexGrow: 1,
            textAlign: "center",
          }}
        >
          <Typography sx={{ paddingTop: "50%" }}>Hello! 👋 </Typography>
          <Typography>
            My Name is Abraham Saldivar. I am a Software Engineer living in
            Houston, Texas.
          </Typography>
        </Box>
        <img
          src={ProfilePicture}
          alt="Profile-Picture"
          width="50%"
          height="50%"
        />
      </Box>
    </>
  );
}

export default Home;
