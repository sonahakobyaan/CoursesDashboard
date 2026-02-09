import { Button } from "@mui/material";
import { LogOut } from "lucide-react";

interface LogoutButtonProps {
  onClick?: () => void;
}

export default function LogoutButton({ onClick }: LogoutButtonProps) {
  return (
    <Button
      onClick={onClick}
      variant="outlined"
      startIcon={<LogOut size={16} />}
      sx={{
        borderColor: "#e5e7eb",
        color: "#374151",
        textTransform: "none",
        fontWeight: 500,
        fontSize: "13px",
        px: 2,
        py: 0.75,
        borderRadius: "10px",
        "&:hover": {
          borderColor: "#667eea",
          color: "#667eea",
          bgcolor: "rgba(102, 126, 234, 0.04)",
        },
      }}
    >
      Logout
    </Button>
  );
}

