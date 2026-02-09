import { IconButton } from "@mui/material";
import { Trash2 } from "lucide-react";

interface DeleteCourseButtonProps {
  onDelete: () => void;
}

export const DeleteCourseButton = ({ onDelete }: DeleteCourseButtonProps) => (
  <IconButton 
    sx={{ bgcolor: "#fef2f2", borderRadius: "10px", width: 40, height: 40 }}
    onClick={onDelete}
  >
    <Trash2 size={18} color="#ef4444" />
  </IconButton>
);
