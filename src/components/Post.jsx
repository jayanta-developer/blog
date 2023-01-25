import React from "react";
import { connect } from "react-redux";
import { Container, Box, Typography } from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FetchPost } from "../actions/index"

class PostList extends React.Component {
  componentDidMount() {
    this.props.FetchPost()
  }
  renderPostList() {
    if (!this.props.Posts) {
      return <Typography>Their is no post</Typography>
    }
    return this.props.Posts.map(post => {
      return (
        <Box m={5} key={post.id} sx={{ border: "gray solid 1px", borderRadius: "5px", padding: "5px" }}>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
          }}><AccountCircleIcon /><Typography variant="h5">{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</Typography></Box>
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