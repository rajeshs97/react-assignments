var React=require('react');
//var LabelComponent=require('./LabelComponent');
var Mailheader = require('./Mailheader');
var TableCreation=require('./TableCreation');
var RightPanel=React.createClass({
  render:function()
  {
    var InboxMail=this.props.rc.map(function(e){

               var from;
               var subject;
               var date;
               for(var i=0;i<e.payload.headers.length;i++){
                    if(e.payload.headers[i].name=="From"){
                      from=e.payload.headers[i].value;
                    }
                    if(e.payload.headers[i].name=="Subject"){
                      subject=e.payload.headers[i].value;
                    }
                    if(e.payload.headers[i].name=="Date"){
                      date=e.payload.headers[i].value;
                    }
               }

         return(
            <TableCreation mailFrom={from} mailSubject={subject}  mailDate={date} />);


    });

    return(
      <div>
      <Mailheader>
      {InboxMail}
      </Mailheader>
      </div>
    );
  }
});
module.exports=RightPanel;
