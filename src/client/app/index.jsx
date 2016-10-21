
// main.js
var React = require('react');
var ReactDOM = require('react-dom');
console.log("working");

var data = [
    { id: 1, author: "Pete Hunt", text: "This is one comment" },
    { id: 2, author: "Jordan Walke", text: "This is *another* comment" },
    { id: 3, author: "Chuck Hulk", text: "This is *another2* comment" },
    { id: 4, author: "Alexis Guzman", text: "Last comment" }
];

var CommentList = React.createClass({//this one render every comment
    render: function(){
        var commentNodes = this.props.data.map(function(comment){//map function in every array
            return (
                <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>//return Comment component with the data
            );
        });
        console.log(commentNodes);
        return ( //return array of components from the map function
            <div className="commentList"> 
                {commentNodes} 
            </div>
        );
    }
});
var CommentForm = React.createClass({
    render: function(){
        return (
            <div className="commentForm">
                Hey! CommentForm Here!.
            </div>
        );
    }
});

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentForm/>
        <CommentList data={this.props.data}/>
      </div>
    );
  }
});

var Comment = React.createClass({
    render: function(){
        return (
            <div className="comment">
                <h4 className="commentAuthor">
                    {this.props.author}
                </h4>
                {this.props.children}
            </div>
        );
    }
});

ReactDOM.render(
  <CommentBox data={data}/>,
  document.getElementById('app')
);
