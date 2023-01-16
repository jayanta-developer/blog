import React from "react";
import { connect } from "react-redux";
import { Container, Box, Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserHeader from "./UserHeader";
import { FetchPost } from "../actions/index"

class PostList extends React.Component {
  componentDidMount() {
    this.props.FetchPost()
  }
  renderPostList() {
    if (!this.props.posts) {
      return <Typography>Their is no post</Typography>
    }
    return this.props.posts.map(post => {
      return (
        <Box m={5} key={post.id} sx={{ border: "1px solid #a8a5a7cc", height: "120px", padding: "15px" }}>
          <Box sx={{ display: 'flex', flexDirection: "row" }}> <AccountCircleIcon /><UserHeader userId={post.userId} /></Box>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
          }}><Typography variant="h5">{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</Typography></Box>
          <Box mx={2}><Typography variant="Subtitle">{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</Typography></Box>
        </Box>
      )
    })
  }

  render() {
    return (<Container>
      <Box>{this.renderPostList()}</Box>
    </Container>)
  }
}
const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps, { FetchPost })(PostList);