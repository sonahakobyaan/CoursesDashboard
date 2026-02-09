import { Box } from "@mui/material";
import LogoImage from "@/assets/logo.png";

export default function Logo() {
  return (
    <Box
      component="img"
      src={LogoImage}
      alt="Company Logo"
      sx={{
        width: "60px",
        cursor: "pointer",
        transition: "transform 0.2s ease",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    />
  );
}
