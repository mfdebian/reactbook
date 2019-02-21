import React, { Component } from 'react';

/**
 * PostForm
 */
class PostForm extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    // TODO: GET author of post (i.e userID)
    this.state = {
      title: '',
      body: '',
      author: 'autor',
    };
    // Bind parameters to the onChange event listener function
    this.onChange = this.onChange.bind(this);
    // Bind parameters to the onSubmit event listener function
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
      this.setState({[event.target.name]: event.target.value});
  }

  onSubmit(event) {
      event.preventDefault();

      const post = {
          title: this.state.title,
          body: this.state.body,
          author: this.state.author,
      }

      // fetch (POST) posts to submit another post
      // TODO: Replace fake JSON posts for Firebase database Posts
      fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(post)
      })
        .then(res => res.json())
        .then(data => console.log(data));
  }

  render() {
    return (
      <div>
        <h1> Add Post </h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label> Title: </label> <br />
                <input
                    type = "text"
                    name = "title"
                    value = { this.state.title }
                    onChange = { this.onChange }
                 />
            </div>

            <br />

            <div>
                <label> Body: </label> <br />
                <textarea
                    name="body"
                    value = { this.state.body }
                    onChange = { this.onChange }
                />
            </div>

            <br />

            <button type="submit"> Post </button>

        </form>
      </div>
    );
  }
}


export default PostForm;
