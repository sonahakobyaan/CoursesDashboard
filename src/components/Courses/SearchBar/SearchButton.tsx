import ButtonComponent from "@/ui/Button";
import type { SxProps, Theme } from "@mui/material";

interface SearchButtonProps {
  onClick: () => void;
  sx?: SxProps<Theme>;
}

export default function SearchButton({ onClick, sx }: SearchButtonProps) {
  return <ButtonComponent text="Search" onClick={onClick} sx={sx} />;
}
