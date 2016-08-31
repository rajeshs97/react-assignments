var React=require('react');

var Home=React.createClass({

  render:function()
  {

    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
             <h1>This is Home page</h1>
             <h2>Welcome</h2>
             </div>
            </div>
          </div>
        </div>
    );
  }
});
module.exports=Home;
