var React=require('react');
var ReactDOM=require('react-dom');

var NavBar=React.createClass({
  render:function()
  {
    return(
      <div className="navbar navbar-fixed-top">
	       <div className="container">
      	   <h1>Heading</h1>
    	   </div>
    </div>
    );
  }
});

module.exports=NavBar;
