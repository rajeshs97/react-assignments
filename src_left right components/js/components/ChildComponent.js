var React= require('react');
var ReactDOM= require('react-dom');
var NavBar = require('./NavBar');
var GrandChild1 = require('./GrandChild1');

var ChildComponent = React.createClass({
    render: function(){
        return(
            <div>
                {this.props.sdata}
            </div>
        );
    }
});

module.exports=ChildComponent;
