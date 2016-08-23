var React= require('react');
var ReactDOM= require('react-dom');

var MyrightPanel= React.createClass({
    render: function(){
        return(
            <div>
                <h1 id="tit">{this.props.title}</h1>
                <p id="desc">{this.props.description}</p>
            </div>
        );
    }
});
module.exports=MyrightPanel
