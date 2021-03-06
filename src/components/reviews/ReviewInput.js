import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  
  state = {
    text: "",
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleOnSubmit = event => {
    event.preventDefault();
    const review = {
      text: this.state.text,
      restaurantId: this.props.restaurantId
    }
    this.props.addReview(review);
    this.setState({
      text: ""
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="text"
            id="text"
            onChange={this.handleOnChange}
            value={this.state.text}
          ></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
