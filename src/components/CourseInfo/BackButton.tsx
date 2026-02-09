import { Box, Button, Typography } from "@mui/material";
import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  onClick: () => void;
}

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
      <Button
        onClick={onClick}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          color: "#667eea",
          textTransform: "none",
          fontWeight: 500,
        }}
      >
        <ArrowLeft size={20} />
        <Typography>Back</Typography>
      </Button>
    </Box>
  );
}

