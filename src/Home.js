import {
  Box,
  Button,
  Container,
  LinearProgress,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomCard from "./Components/CustomCard";
import HeadCard from "./Components/HeadCard";

const optionData = ["Option 1", "Option 2", "Option 4"];

function Home() {
  return (
    <Box component={"div"} style={MainBodyStyle}>
      <Container maxWidth={"md"}>
        <Box component={"form"} sx={FormBody}>
          <HeadCard />
          <CustomCard Title={"MCQ"} NeedRadio data={optionData} />
          <CustomCard Title={"Checkbox"} NeedCheckBox data={optionData} />
          <CustomCard Title={"Short Answer"} NeedInput />
          <CustomCard Title={"ParaGraph"} NeedInput multiline fullWidth />
          <CustomCard Title={"Drop down"} DropDownMenu data={optionData} />
          <CustomCard Title={"File Upload"} NeedFileUploader />
          <CustomCard Title={"Linear Scale"} Needscale data={[1, 2, 3, 4, 5]} />
          <CustomCard Title={"Multi choice Grid"} RadioTable />
          <CustomCard Title={"Tick box Grid"} CheckboxTable />

          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <LinearProgress
              variant={"determinate"}
              color="success"
              sx={LinearProgressStyle}
              value={100}
            />
            <Typography
              sx={{ paddingLeft: "10px", fontSize: "14px", color: "#202124" }}
            >
              Page 1 of 1
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <Button type="submit" variant="contained"
            sx={{boxShadow:"none"}}>
              Submit
            </Button>
            <span style={{ flex: 1 }} />
            <Stack
              direction={"row"}
              alignItems={"center"}
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <LinearProgress
                variant={"determinate"}
                color="success"
                sx={LinearProgressStyle}
                value={100}
              />
              <Typography
                sx={{ paddingLeft: "10px", fontSize: "14px", color: "#202124" }}
              >
                Page 1 of 1
              </Typography>
            </Stack>
            <span style={{ flex: 1 }} />
            <Button  >Clear form</Button>
          </Stack>
          <Box>
            <Typography sx={FooterTypo}>
              Never submit passwords through Noodle Forms.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={FooterTypo}>
              his content is neither created nor endorsed by Noodle. Report
              Abuse -{" "}
              <Link
                herf="/"
                style={FooterLink}
              >
                Terms of Service
              </Link>{" "}
              -{" "}
              <Link
                herf="/"
                style={FooterLink}
              >
                {" "}
                Privacy Policy{" "}
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const MainBodyStyle = {
  background: "rgb(240, 235, 248)",
  minHeight: "100vh",
  display: "flex",
  padding: "0px 0px 20px 0px",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "horizontal",
};

const FormBody = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: { md: "10px 100px", sm: "10px 30px",xs:"20px 0px" },
};

const LinearProgressStyle = {
  width: "180px",
  height: "10px",
  borderRadius: "10px",
};


const FooterTypo ={
  fontSize: "12px", color: "#70757a"
}

const FooterLink = {
  textDecoration: "underline", cursor: "pointer" 
}
export default Home;
