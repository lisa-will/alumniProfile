var React = require('react');

var BlogForm = React.createClass( {
  getInitialState: function(){
    return { author: '', body: '' };
    // this.handleAuthorChange = this.handleAuthorChange.bind(this);
    // this.handleBodyChange = this.handleBodyChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  },
  handleAuthorChange: function(e) {
    this.setState({ author: e.target.value });
  },
  handleBodyChange: function(e) {
    this.setState({ body: e.target.value });
  },
  handleSubmit: function(e) {
    e.preventDefault();
    let author = this.state.author.trim();
    let body = this.state.body.trim();
        console.log(author + " " + body);
    if (!body || !author) {
      return;
    }
    console.log("Here");
    this.props.onBlogSubmit({ author: author, body: body });
    this.setState({ author: '', body: '' });
  },
  render: function() {
    return (
      
    )
  }
});

module.exports =  BlogForm;