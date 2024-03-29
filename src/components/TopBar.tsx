import React, { FC } from 'react';
import AppBar from "@mui/material/AppBar";
import { Button, Icon, Stack } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { useNavigate } from "react-router-dom";

const TopBar: FC = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="static">
      <Stack direction="row" gap={2}>
        <Icon sx={{ fontSize: "3rem" }}>
          <RestaurantIcon sx={{ fontSize: "3rem" }}/>
        </Icon>
        <Button variant="text" color="inherit" onClick={() => navigate("/")}>Home</Button>
        <Button variant="text" color="inherit" onClick={() => navigate("/week-ahead")}>Week Ahead</Button>
        <Button variant="text" color="inherit" onClick={() => navigate("/planner")}>Planner</Button>
      </Stack>
    </AppBar>
  );
};

export default TopBar;
