import { IconButton } from "@mui/material";
import { Edit2 } from "lucide-react";

interface EditCourseButtonProps {
  onClick: () => void;
}

export const EditCourseButton = ({ onClick }: EditCourseButtonProps) => (
  <IconButton
    onClick={onClick}
    sx={{
      bgcolor: "#f8f9ff",
      borderRadius: "10px",
      width: 40,
      height: 40,
      "&:hover": {
        bgcolor: "#e8eaff",
      },
    }}
  >
    <Edit2 size={18} color="#667eea" />
  </IconButton>
);

