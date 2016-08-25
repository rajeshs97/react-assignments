var React=require('react');
var MailTable=require('./MailTable');
var TableComponent=React.createClass({

  render:function(){
    var from;
    var date;
    var subject;

    var labelArray= this.props.inboxMsg.map(function(e)
    {
      for (var i = 0; i <e.payload.headers.length; i++)
      {
        if(e.payload.headers[i].name=="From")
        {
          from = e.payload.headers[i].value;
        }
        if(e.payload.headers[i].name=="Subject")
        {
          subject = e.payload.headers[i].value;
        }
        if(e.payload.headers[i].name=="Date")
        {
          date = e.payload.headers[i].value;
        }
      }
      return(

        <MailTable mailfrom={from} mailsub={subject} maildate={date} />

      );
    });

    return(
      <div>
      <p>this is your data</p>
      {labelArray}
      </div>
    );
  }
});
module.exports=TableComponent
