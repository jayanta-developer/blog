import React, { Component } from 'react'
import { connect } from "react-redux";
import { FetchUser } from "../actions/index"


class UserHeader extends Component {
  componentDidMount() {
    this.props.FetchUser(this.props.userId)
  }
  render() {
    const user = this.props.users.find((user) => user.data.id === this.props.userId);
    if (!user) return null
    return (
      <div>{user.data.name}</div>
    )
  }
}
const mapStateToProps = (state) => {
  return { users: state.users }
}
export default connect(mapStateToProps, { FetchUser })(UserHeader);