import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

import Grid from "@mui/material/Grid";
import WorkIcon from "@mui/icons-material/Work";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function WorkXP() {
  const data = {
    jobs: [
      {
        id: 1,
        name: "The Lab Consulting",
        title: "Robotic Process Automation Engineer",
        bullet_one:
          "Designed and automated processes for companies in order to increase efficiency.",
        bullet_two:
          "Generated process models illustrating automation engineering progress, specifications and details.",
        bullet_three:
          "Improved processes for companies in order to increase efficiency by 75%. ",
      },
      {
        id: 2,
        name: "Amazon",
        title: "Amazon+ Locker Associate",
        bullet_one:
          "Maximized productivity by keeping detailed records of daily progress and identifying and rectifying areas for improvement.",
        bullet_two:
          "Designed training programs and educated new hires and saw customer satisfaction go up by 50%",
        bullet_three: "Improved efficiency by 75%.",
      },
      {
        id: 3,
        name: "Amazon",
        title: "Warehouse Associate",
        bullet_one:
          "Inspected incoming and outgoing shipments to verify accuracy and prevent errors.",
        bullet_two:
          "Used hand-held devices and computers to record and monitor inventory levels and completed audits to uncover and address inaccuracies.",
        bullet_three:
          "Alternated goods in inventory by observing first-in and first-out approach to keep shelves organized and properly stocked.",
      },
      {
        id: 4,
        name: "Amazon",
        title: "Customer Returns Services",
        bullet_one:
          "Collaborated with team members to facilitate returns quickly and provide outstanding customer service.",
        bullet_two:
          "Delivered high-quality customer service by gathering feedback on product deficiencies.",
        bullet_three: "Inspected returned products for damages.",
      },
    ],
  };

  return (
    <>
      <Grid item xs={12} md={6}>
        <Box display="flex" justifyContent="center" flexDirection="row">
          <Box
            sx={{
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            <Typography sx={{ paddingTop: 5, fontSize: 50 }}>
              💼 Work Experience{" "}
            </Typography>
          </Box>
        </Box>

        <List>
          {data.jobs.map((job) => (
            <>
              <div onClick={() => console.log("Click")}>
                <Accordion sx={{ padding: 5 }}>
                  <AccordionSummary
                    id="panel1-header"
                    aria-controls="panel1-content"
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={job.name} secondary={job.title} />
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box padding={1}>
                      <Typography>▹ {job.bullet_one}</Typography>
                    </Box>
                    <Box padding={1}>
                      <Typography>▹ {job.bullet_two}</Typography>
                    </Box>
                    <Box padding={1}>
                      <Typography>▹ {job.bullet_three}</Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </div>
            </>
          ))}
        </List>
      </Grid>
    </>
  );
}

export default WorkXP;
