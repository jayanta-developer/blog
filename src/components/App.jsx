import React from "react";
//ui
import { Container, Typography } from "@mui/material"
//component
import Post from "./Post";

const App = () => {
  return (
    <Container >
      <Typography variant="h3" align="center">News feed</Typography>
      <Post />
    </Container>
  );
};

export default App;
