var React=require('react');

var LabelComponent=React.createClass({
  render:function()
  {
    return(
      <a id={this.props.id} name={this.props.name} href="#">{this.props.name}</a>
    );
  }
});
module.exports=LabelComponent
