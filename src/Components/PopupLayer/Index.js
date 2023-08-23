import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

function PopupLayed({ onCancel, onClear, onTap }) {
  return (
    <Box
      component={"div"}
      onClick={onTap}
      sx={{
        minHeight: "100vh",
        position: "fixed",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        background: "rgba(0,0,0,0.5)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#fff",
          padding: "20px 20px 10px 20px",
          width: "350px",
          borderRadius: "8px",
        }}
      >
        <Stack gap={1}>
          <Typography sx={{ fontSize: "22px", color: "#202124" }}>
            Clear form?
          </Typography>
          <Typography>
            This will remove your answers from all questions and cannot be
            undone.
          </Typography>
          <Stack direction={"row"}>
            <span style={{ flex: 1 }} />
            <Button onClick={onCancel} sx={{ color: "#5f6368" }}>
              Cancel
            </Button>
            <Button onClick={onClear} sx={{ color: "#5f6368" }}>
              Clear form
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default PopupLayed;
