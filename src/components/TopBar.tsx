import React, { FC } from 'react';
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";

const TopBar: FC = () => {
  return (
    <AppBar position="static">
      <Stack direction="row">
        <Typography variant="h1" mr="auto">Mealtime</Typography>
        <Button variant="text" color="inherit">Home</Button>
        <Button variant="text" color="inherit">Week Ahead</Button>
        <Button variant="text" color="inherit">Planner</Button>
      </Stack>
    </AppBar>
  );
};

export default TopBar;
