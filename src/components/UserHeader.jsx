import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    console.log(this.props.user);
    const user = this.props.User.find((user) => user.id === this.props.userId);
    if (!user) return null;
    return <div>name</div>;
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(UserHeader);
