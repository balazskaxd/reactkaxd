import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


class HomePage extends Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      props.history.push('/login');
    }, 3000);
  }

  render() {
    return (
      <div className="page page-home">
        <h1>
          Hello, {this.props.username}!
        </h1>
      </div>
    );
  }
}

HomePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  username: PropTypes.string,
};

function mapStateToProps(store) {
  return {
    username: store.user.username,
  };
}

export default connect(
  mapStateToProps,
  {},
)(HomePage);
