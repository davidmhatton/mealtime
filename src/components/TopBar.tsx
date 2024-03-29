import React, { FC } from 'react';
import AppBar from "@mui/material/AppBar";
import { Button, Icon, Stack } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';

const TopBar: FC = () => {
  return (
    <AppBar position="static">
      <Stack direction="row" gap={2}>
        <Icon sx={{ fontSize: "3rem" }}>
          <RestaurantIcon sx={{ fontSize: "3rem" }}/>
        </Icon>
        <Button variant="text" color="inherit">Home</Button>
        <Button variant="text" color="inherit">Week Ahead</Button>
        <Button variant="text" color="inherit">Planner</Button>
      </Stack>
    </AppBar>
  );
};

export default TopBar;
