import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux';

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.add}/>
        <Restaurants />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { text: state.text }
}

const mapDispatchToProps = dispatch => {
  return {
    add: text => dispatch({ type: "ADD_RESTAURANT", text}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
