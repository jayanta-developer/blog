import React from "react";
import { connect } from "react-redux";
import { Container, Box } from "@mui/material"
// import { FetchPost } from "../actions/index"

class PostList extends React.Component {
  componentDidMount() {
    // this.props.FetchPost()
  }
  render() {
    return <Container>
      <Box>Post</Box>
    </Container>
  }
}
export default connect(null)(PostList);