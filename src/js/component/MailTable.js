var React=require('react');
var MailTable=React.createClass({

  render:function(){

    return(
      <div>
      <table><td>
      {this.props.mailfrom}
      </td>
      </table>
      </div>
    );
  }
});
module.exports=MailTable
