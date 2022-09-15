import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grid, Grow } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";

import {getPosts} from './actions/posts'

import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import memories from "./images/memories.png";
// import useStyles from './styles'

const Image = styled('img')`
  margin-left: 15px;
  height: 60px;
`;

function App() {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  },[currentId,dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar
        sx={{
          display: "flex",
          borderRadius: "15px",
          margin: "30px 0",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        color="inherit"
        position="static"
      >
        <Typography
          sx={{ color: "rgba(0,183,255, 1)" }}
          variant="h2"
          align="center"
        >
          Memories
        </Typography>
        <Image src={memories} alt="memories" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify={"space-between"}
            alignItems={"stretch"}
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
