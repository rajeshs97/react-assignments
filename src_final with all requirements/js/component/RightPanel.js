var React=require('react');
var Header=require('./Header');
var TableForm=require('./TableForm');
//var LabelComponent=require('./LabelComponent');
var RightPanel=React.createClass({

  getHTMLPart: function(arr)
{
  for(var x = 0; x <= arr.length; x++)
  {
    if(typeof arr[x].parts === 'undefined')
    {
      if(arr[x].mimeType === 'text/html')
      {
        return arr[x].body.data;
      }
    }
    else
    {
      return this.getHTMLPart(arr[x].parts);
    }
  }
  return '';
},
  render:function()
  {
    var ob2=this;
    var InboxMail=this.props.rp.map(function(e){

      if(typeof e.payload.parts === 'undefined')
          {
            encodedBody = e.payload.body.data;
          }
          else
          {
            encodedBody = ob2.getHTMLPart(e.payload.parts);
          }

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
            <TableForm mailFrom={from} mailSubject={subject}  mailDate={date} encodedBodyToChild={encodedBody}/>
            </div>
);
    });

    return(
      <div>
      <Header />
      {InboxMail}
      </div>
    );
  }
});
module.exports=RightPanel;
