import { Box } from "@mui/material";
import SearchButton from "@/components/Courses/SearchBar/SearchButton.tsx";
import SearchInput from "@/components/Courses/SearchBar/SearchInput.tsx";

interface SearchBarProps {
  searchQuery: string;
  onSearchQueryChange: (value: string) => void;
  onSearch: () => void;
}

export default function SearchBar({ searchQuery, onSearchQueryChange, onSearch }: SearchBarProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <Box 
      sx={{ 
        display: "flex", 
        gap: 2, 
        flexWrap: { xs: "wrap", sm: "nowrap" },
        flexDirection: { xs: "column", sm: "row" },
        width: { xs: "100%", sm: "fit-content" }
      }}
    >
      <SearchInput
        value={searchQuery}
        onChange={onSearchQueryChange}
        onKeyDown={handleKeyDown}
        placeholder="Search for courses..."
        sx={{ width: { xs: "100%", sm: "400px" } }}
      />
      <SearchButton onClick={onSearch} sx={{ width: { xs: "100%", sm: "auto" } }} />
    </Box>
  );
}
