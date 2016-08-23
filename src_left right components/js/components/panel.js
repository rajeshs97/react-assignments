var React= require('react');
var ReactDOM= require('react-dom');
var NavBar = require('./NavBar');


var leftPanel= React.createClass({
    render: function(){
        return(
            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-body">
                    <leftpanel />
                    <rightpanel />
                </div>
              </div>
            </div>
        );
    }
});
module.exports=leftPanel;
