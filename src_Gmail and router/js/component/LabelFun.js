var React=require('react');

var LabelFun=React.createClass({
  change:function(){
    console.log(this.props.labC);
    this.props.msgID(this.props.labC);
  },
  render:function()
  {
    console.log("Label Functions");
    return(
      <div >
      <button className="btn btn-primary btn-group-justified" onClick={this.change}>{this.props.labC}</button>
      </div>
    );
  }
});
module.exports=LabelFun
