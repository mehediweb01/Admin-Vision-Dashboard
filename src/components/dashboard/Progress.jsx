import { Box, LinearProgress, Typography } from "@mui/material";
import React from "react";

const Progress = ({ value }) => {
  return (
    <Box sx={{ width: "75%", textAlign: "start" }}>
      <Typography variant="h6" gutterBottom color="#fff">
        {value} %
      </Typography>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 5,
          borderRadius: 5,
          backgroundColor: "#e0e0e0",
          "& .MuiLinearProgress-bar": { backgroundColor: "#175DBA" },
        }}
      />
    </Box>
  );
};

export default Progress;
