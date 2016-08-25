var React=require('react');
var ReactDOM=require('react-dom');

// var NavBar=require('./component/NavBar');
var GmailBox=require('./component/GmailBox');
var RightPanel=require('./component/RightPanel');

var Parent=React.createClass({
  render: function()
  {
    return(
    <div className="container" id="content">

      <div className="row">

        <GmailBox />
      </div>

      <div className="row">
      </div>
    </div>
   );
  }
});
ReactDOM.render(<Parent/>,document.getElementById('app'));
