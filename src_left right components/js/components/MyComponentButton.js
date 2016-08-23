var React= require('react');
var ReactDOM= require('react-dom');
var NavBar = require('./NavBar');

var MyComponentButton= React.createClass({

    render: function(){
        return(
            <button type="button" className="btn btn-primary" onClick={this.props.handleChangeState}>Click Me</button>
        );
    }
});

module.exports=MyComponentButton;
