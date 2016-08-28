var React = require('react');
var ReactDom = require('react-dom');

var App = React.createClass({
  render: function() {
    return (
    	<div><h1>Hello from React!</h1>
    	</div>
    	);
  }
});

ReactDom.render(<App/>, document.getElementById('react-root'));