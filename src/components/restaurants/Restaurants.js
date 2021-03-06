import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  
  renderRestaurants = () => this.props.restaurants.map((restaurant, id) => <Restaurant key={id} restaurant={restaurant} delete={this.props.delete}/>)
  
  render() {
    return(
      <ul>
        {this.renderRestaurants()}
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return { restaurants: state.restaurants };
}

const mapDispatchToProps = dispatch => {
  return {
    delete: id => dispatch({ type: "DELETE_RESTAURANT", id })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);