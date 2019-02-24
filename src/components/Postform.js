import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './posts.css'

// Redux libraries
import { connect } from 'react-redux';

// Actions
import { createPost } from '../actions/postActions';

/**
 * PostForm
 */
class PostForm extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    // TODO: GET author of post (i.e userID)
    this.state = {
      body: '',
      // author: 'autor',
    };

    // Bind parameters to the onChange event listener function
    this.onChange = this.onChange.bind(this);
    // Bind parameters to the onSubmit event listener function
    this.onSubmit = this.onSubmit.bind(this);
  }

  // Displays what's written into the post textarea
  onChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  // Submit post handler
  onSubmit(event) {
      event.preventDefault();

      const post = {
        body: this.state.body,
      };

      // Call post's POST action
      this.props.createPost(post);

    // Should return to initial state, this hack will do for now
    this.setState({body: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <br />
          <div>
            <textarea
              name="body"
              className="post-textarea"
              placeholder="¿Qué quieres compartir?"
              value = { this.state.body }
              onChange = { this.onChange }
            />
          </div>
          <button type="submit" className="btn"> Post </button>
        </form>
      </div>
    );
  }
}

// Component's properties types
PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
