import { Box, Typography } from "@mui/material";

import { AccordionComponent } from "../../components";

export const Doubts = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          margin: "5px 0 50px 0",
          fontSize: "25px",
          fontWeight: "500",
          fontStyle: "italic",
        }}
      >
        As 10 lições do Swing
      </Typography>
      <AccordionComponent />
    </Box>
  );
};
