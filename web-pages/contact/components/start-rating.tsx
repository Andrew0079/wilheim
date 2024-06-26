import { Box } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function StarRating({ rating }: { rating: number }) {
  const roundedRating = Math.ceil(rating); // Rounds 3.5 to 4, 4.1 to 5, etc.
  const emptyStars = 5 - roundedRating;

  return (
    <Box>
      {[...Array(roundedRating)].map((_, i) => (
        <StarIcon key={i} style={{ color: "#FABC05" }} />
      ))}
      {[...Array(emptyStars)].map((_, i) => (
        <StarBorderIcon key={i} />
      ))}
    </Box>
  );
}

export default StarRating;
