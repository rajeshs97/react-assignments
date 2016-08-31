var React=require('react');
var {Link}=require('react-router');
var Navlink=React.createClass({

  render:function()
  {

    return(
      <Link {...this.props} activeClassName="active"/>
    )
  }
});
module.exports=Navlink;
