import { Box, LinearProgress, Typography } from "@mui/material";

const KPIWidget = ({ image, name, countNum, value }) => {
  return (
    <div className="flex flex-col justify-start items-start">
      <div className="flex justify-start items-center gap-2">
        <div className="p-1 bg-blue-700 rounded-md">
          <img src={image} alt={name} className="size-4 rounded-md" />
        </div>
        <h2 className="text-base font-semibold text-gray-300 tracking-wider">
          {name}
        </h2>
      </div>
      <div className="w-full">
        <Box sx={{ width: "100%", textAlign: "start" }}>
          <Typography variant="h6" gutterBottom color="#fff">
            {countNum}
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
      </div>
    </div>
  );
};

export default KPIWidget;
