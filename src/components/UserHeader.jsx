import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    const user = this.props.users.find((user) => user.id === this.props.userId);
    if (!user) return null;
    return <p>{user.name}</p>;
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(UserHeader);