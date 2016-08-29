var React=require('react');

var NavLink=React.createClass({

  render:function()
  {

    return(
      <div calssName="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
             <h1>NavLink component</h1>
             </div>
            </div>
          </div>
        </div>
    );
  }
});
module.exports=NavLink
