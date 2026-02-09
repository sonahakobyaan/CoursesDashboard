import { Box, Typography } from "@mui/material";
import { Calendar } from "lucide-react"; 

interface CreationDateProps {
  date: string;
}

export const CreationDate = ({ date }: CreationDateProps) => {
  return (
    <Box 
      sx={{ 
        display: "flex", 
        alignItems: "center", 
        gap: 0.5,
        mt: 1 
      }}
    >
      <Calendar size={14} color="#9ca3af" />
      <Typography 
        sx={{ 
          fontSize: "12px", 
          color: "#9ca3af"
        }}
      >
        {date}
      </Typography>
    </Box>
  );
};
