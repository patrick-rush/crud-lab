import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux';

class Reviews extends Component {
  
  renderReviews = () => this.props.reviews.map((review, id) => <Review key={id} review={review} delete={this.props.delete} />)
  
  render() {
    return (
      <ul>
        {this.renderReviews()}
      </ul>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return {
    delete: id => dispatch({ type: "DELETE_REVIEW", id})
  }
}

export default connect(null, mapDispatchToProps)(Reviews);