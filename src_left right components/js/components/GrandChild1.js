var React= require('react');
var ReactDOM= require('react-dom');
var NavBar = require('./NavBar');


var GrandChild1= React.createClass({
    render: function(){
        return(
            <div className="container">
                <h3>{this.props.snack}</h3>
            </div>
        );
    }
});
module.exports=GrandChild1;
