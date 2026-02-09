import { TextField, InputAdornment, type SxProps, type Theme } from "@mui/material";
import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  placeholder?: string;
  sx?: SxProps<Theme>;
}

export default function SearchInput({ value, onChange, onKeyDown, placeholder, sx }: SearchInputProps) {
  return (
    <TextField
      placeholder={placeholder || "Search courses, instructors, or topics..."}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onKeyDown}
      variant="outlined"
      sx={{
        width: "400px",
        "& .MuiOutlinedInput-root": {
          borderRadius: "12px",
          bgcolor: "#ffffff",
          "& fieldset": { borderColor: "#e5e7eb" },
          "&:hover fieldset": { borderColor: "#667eea" },
          "&.Mui-focused fieldset": { borderColor: "#667eea" },
        },
        ...sx,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search size={20} color="#9ca3af" />
          </InputAdornment>
        ),
      }}
    />
  );
}
