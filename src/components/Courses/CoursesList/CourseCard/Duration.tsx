import { Box, Typography } from "@mui/material";
import { Clock } from "lucide-react";
import { formatDuration } from "@/services/courses.service";

interface DurationProps {
  duration: number;
}

export const Duration = ({ duration }: DurationProps) => {
  const formattedDuration = formatDuration(duration);
  
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <Clock size={16} color="#9ca3af" />
      <Typography sx={{ fontSize: "13px", color: "#6b7280" }}>
        {formattedDuration}
      </Typography>
    </Box>
  );
};

