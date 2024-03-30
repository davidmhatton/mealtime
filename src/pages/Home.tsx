import React, { FC } from 'react';
import { Container, Typography } from "@mui/material";

const Home: FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1">Mealtime</Typography>
      <Typography variant="body1">
        Something will go here. Probably documentation, when this page can be turned into a help page.
      </Typography>
    </Container>
  );
};

export default Home;
