import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";
import { Link } from "react-router-dom";

function HeadCardSubmit() {
  return (
    <Box
    sx = {MainBodyStyle}
    >
      <Container maxWidth={"md"}>
    <Box component={"div"} sx={FormBody}>

    <Box component="div" style={CustomCardStyle()}>
      <Box
        sx={{
          height: "10px",
          borderRadius: "8px 8px 0px 0px",
          background: "rgb(103, 58, 183)",
        }}
      />
      <Typography
        component={"h1"}
        sx={{ fontSize: "32px", padding: "12px 24px" }}
      >
        Assignment Task
      </Typography>
      
      <Box sx={{ padding: "10px 24px" }}>
        <Typography sx={{ color: "#5f6368", fontSize: "14px" }}>
        Your response has been recorded.
        </Typography>
      </Box>
        <Box sx={{padding:"10px 10px 24px 24px"}}>
      <a href="/" style={{color:"#1976D2",}}>
     Submit another response
      </a>
        </Box>
    </Box>
    </Box>
    </Container>
    </Box>
    
  );
}

const CustomCardStyle = () => {
  return {
    background: "#fff",
    borderRadius: "8px",
    border: "1px solid #dadce0"
  };
};

const MainBodyStyle = {
  background: "rgb(240, 235, 248)",
  minHeight: "100vh",
  padding: "0px 0px 20px 0px",

};

const FormBody = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: { md: "10px 100px", sm: "10px 30px", xs: "20px 0px" },
};
export default HeadCardSubmit;
