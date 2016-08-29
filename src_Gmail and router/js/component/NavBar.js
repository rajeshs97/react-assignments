var React=require('react');
var {Link}=require('react-router');
var Navlink=require('./Navlink');

var NavBar=React.createClass({
  render:function()
  {
    return(
	       <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><Navlink to="/home">Home</Navlink></li>
              <li><Navlink to="/gmailbox">Gmail</Navlink></li>
              <li><Navlink to="/about/React">About React</Navlink></li>
              <li><Navlink to="/about/Router">About Router</Navlink></li>
            </ul>
    	   </div>
    );
  }
});

module.exports=NavBar;
