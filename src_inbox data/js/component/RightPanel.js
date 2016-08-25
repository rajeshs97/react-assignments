var React=require('react');
var TableComponent=require('./TableComponent');

var RightPanel=React.createClass({

  render:function(){

    var labelArray= this.props.inboxMsg.map(function(e){

      return(
        <div className="list-group-item">
        <table>
          <tr><th>
          {e.name}
          </th>
          </tr>
        </table>
        </div>

      );
    });

    return(
      <div>
      {labelArray}
      </div>
    );
  }
});
module.exports=RightPanel
