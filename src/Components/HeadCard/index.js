import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import CloudDoneOutlinedIcon from "@mui/icons-material/CloudDoneOutlined";

function HeadCard() {
  return (
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
      <Divider />
      <Box sx={{ padding: "12px 24px" }}>
        <Stack direction={"row"} gap={"3px"} paddingBottom={"15px"}>
          <Typography
            sx={{ color: "#5f6368", fontWeight: "600", fontSize: "14px" }}
          >
            example@gmail.com
          </Typography>
          <Typography
            component={"a"}
            sx={{ color: "#1976D2", textDecoration: "none", fontSize: "14px" }}
            href="/"
          >
            Switch accounts
          </Typography>
          <span style={{ flex: 1 }} />
          <button
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <CloudDoneOutlinedIcon sx={{ color: "#5f6368" }} />
          </button>
        </Stack>
        <Typography sx={{ color: "#5f6368", fontSize: "14px" }}>
          The name and photo associated with your Google Account will be
          recorded when you upload files and submit this form. Your email
          address is not part of your response.
        </Typography>
      </Box>
      <Divider />
      <Typography sx={{ color: "#D93025", padding: "15px 24px" }}>
        * Indicates required question
      </Typography>
    </Box>
  );
}

const CustomCardStyle = () => {
  return {
    background: "#fff",
    borderRadius: "8px",
    border: "1px solid #dadce0",
  };
};

export default HeadCard;
