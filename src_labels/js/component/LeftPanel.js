var React=require('react');
var LabelComponent=require('./LabelComponent');

var LeftPanel=React.createClass({
  render:function()
  {
    var target=this.props.allLabelsData.map(function(d,i)
      {
        return(
          <div key={i}>
            <LabelComponent key={i} id={d.id} name={d.name}>{d.name}</LabelComponent>
          </div>
        );
      });
      console.log(target);
      return(
        <div>
          {target}
        </div>
      );
  }
});
module.exports=LeftPanel
