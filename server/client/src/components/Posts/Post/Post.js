import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAlt from "@mui/icons-material/ThumbUpAlt";
import Delete from "@mui/icons-material/Delete";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import moment from "moment";
import { styled } from "@mui/system";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";

const Wrap = styled("div")`
  position: absolute;
  top: 20px;
  left: 20px;
  color: #fff;
`;

const Wrap2 = styled("div")`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
`;

const Wrap3 = styled("div")`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();


  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "15px",
        height: "100%",
        position: "relative",
      }}
    >
      <CardMedia
        sx={{
          height: 0,
          paddingTop: "56.25%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "darken",
        }}
        image={post.selectedFile}
        title={post.title}
      />
      <Wrap>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createAt).fromNow()}
        </Typography>
      </Wrap>
      <Wrap2>
        <Button style={{ color: "white" }} size="small" onClick={() => setCurrentId(post._id)}>
          <MoreHoriz fontSize="default" />
        </Button>
      </Wrap2>
      <Wrap3>
        <Typography variant="body2" color="GrayText">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </Wrap3>
      <Typography sx={{ padding: "0 16px" }} variant="h5" gutterBottom>
          {post.title}
        </Typography>
      <CardContent>
        <Typography  variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          padding: "0 16px 8px 16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAlt fontSize="small" />
          Like
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
          <Delete fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );  
};

export default Post;
