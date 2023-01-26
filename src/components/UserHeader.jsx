import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    const user = this.props.User.find((user) => user.id === this.props.userId);
    if (!user) return null;
    return <h4 style={{ paddingBottom: "25px" }}>{user.name}</h4>;
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(UserHeader);
