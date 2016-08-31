var React=require('react');

var LabelFun=React.createClass({
  change:function(){
    console.log(this.props.g1);
    this.props.msgeID(this.props.g1);
  },
  render:function()
  {
    console.log("inside label functionality");
    return(
      <div>
      <button className="list-group-item list-group-item-action list-group-item-info btn-group-justified" onClick={this.change}>{this.props.g1}</button>
      </div>
    );
  }
});
module.exports=LabelFun
