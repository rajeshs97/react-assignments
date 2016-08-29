var React=require('react');

var About=React.createClass({

  render:function()
  {

    return(
            <div className="jumbotron" container-fluid>
             <h1>AboutUs</h1><h1>{this.props.params.React}</h1>
            </div>
    );
  }
});
module.exports=About
