var React= require('react');
var ReactDOM= require('react-dom');
var NavBar = require('./NavBar');

var leftPanel= React.createClass({

    render: function(){
        return(
        			<div className="panel panel-default">
        				<div className="panel-heading">
        					<h3 className="panel-title">
        						Panel title
        					</h3>
        				</div>
        				<div className="panel-body">
        					Panel content
        				</div>
        				<div className="panel-footer">
        					Panel footer
        				</div>
        			</div>
        );
    }
});
module.exports=leftPanel;
