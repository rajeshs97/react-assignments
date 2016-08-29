var React=require('react');

var TableManibulation=require('./Headings');
var TableFormat=require('./TableFormat');

var RightPanel=React.createClass({
  render:function()
  {
    var InboxMail=this.props.rp.map(function(e){
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
           <div>
            <TableFormat mailFrom={from} mailSubject={subject}  mailDate={date} />
            </div>
);
    });

    return(
      <div>
      <TableManibulation />
      {InboxMail}
      </div>
    );
  }
});
module.exports=RightPanel;
