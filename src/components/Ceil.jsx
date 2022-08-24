import { Box } from "@mui/material";

export default function Ceil({ char }) {
  console.log(char);
  return (
    <>
      <Box sx={{ border: "1px black solid", width: 50, height: 50 }}>
        {char}
      </Box>
    </>
  );
}
