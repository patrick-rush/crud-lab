import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.add} restaurantId={this.props.restaurant.id}/>
        <Reviews reviews={this.props.reviews.filter(review => review.restaurantId == this.props.restaurant.id)}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { reviews: state.reviews }
}

const mapDispatchToProps = dispatch => {
  return {
    add: review => dispatch({ type: "ADD_REVIEW", review })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
