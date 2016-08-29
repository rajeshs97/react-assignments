var React=require('react');

var Home=React.createClass({

  render:function()
  {

    return(
      <div calssName="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
             <h1>This is Home</h1>
             </div>
            </div>
          </div>
        </div>
    );
  }
});
module.exports=Home
