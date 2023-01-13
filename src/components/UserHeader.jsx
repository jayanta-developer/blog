import React, { Component } from 'react'
import { connect } from "react-redux";
import { FetchUser } from "../actions/index"


class UserHeader extends Component {
  componentDidMount() {
    this.props.FetchUser(this.props.userId)
  }
  render() {
    const user = this.props.User.find((user) => user.id === this.props.userId);
    console.log(user)
    if (!user) return null
    return (
      <div>{user.name}</div>
    )
  }
}
const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps, { FetchUser })(UserHeader);