import { Button, type SxProps, type Theme } from "@mui/material";

interface ButtonComponentProps {
  text: string;
  onClick?: () => void;
  sx?: SxProps<Theme>;
  type?: "button" | "submit" | "reset";
}

export default function ButtonComponent({ text, onClick, sx, type = "button" }: ButtonComponentProps) {
  return (
    <Button
      fullWidth
      type={type}
      variant="contained"
      size="medium"
      onClick={onClick}
      sx={{
        py: 2,
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        textTransform: "none",
        maxWidth: "200px",
        minWidth: "fit-content",
        fontSize: "16px",
        fontWeight: 600,
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)",
        "&:hover": {
          boxShadow: "0 15px 40px rgba(102, 126, 234, 0.4)",
          transform: "translateY(-2px)",
        },
        transition: "all 0.3s ease",
        ...sx,
      }}
    >
      {text}
    </Button>
  );
}
