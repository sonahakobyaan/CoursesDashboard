import { Typography } from "@mui/material";

export const Title = ({ title }: { title: string }) => (
  <Typography
    sx={{
      fontSize: "18px",
      fontWeight: 700,
      color: "#1a1a2e",
      mb: 1,
      lineHeight: 1.4,
    }}
  >
    {title}
  </Typography>
);