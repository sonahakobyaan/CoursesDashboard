import { Typography } from "@mui/material";

export const Description = ({ text }: { text: string }) => (
  <Typography
    sx={{
      fontSize: "14px",
      color: "#6b7280",
      mb: 3,
      lineHeight: 1.6,
    }}
  >
    {text}
  </Typography>
);