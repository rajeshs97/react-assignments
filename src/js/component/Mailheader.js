var React=require('react');

var Mailheader=React.createClass({

  render:function(){

    return(
<div className="list-group-item">

<div className="container-fluid">
	<div className="row">
		<div className="col-lg-4"  id='headerMail1'>
    From
		</div>
		<div className="col-lg-4" id='headerMail2'>
    Subject
		</div>
		<div className="col-lg-4" id='headerMail3'>
    Date
		</div>
	</div>
</div>
</div>

    );

  }
});
module.exports=Mailheader;
