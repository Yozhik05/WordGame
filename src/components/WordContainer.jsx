import { Box } from "@mui/material";
import Ceil from "./Ceil";

export default function WordContainer({ word }) {
  const ArrayWord = word.split();
  console.log(ArrayWord)
  return (
    <>
      <Box sx={{ display: "flex" }}>
        {ArrayWord.map((char, index) => (
          <Ceil key={index} char={char} />
        ))}
      </Box>
    </>
  );
}
