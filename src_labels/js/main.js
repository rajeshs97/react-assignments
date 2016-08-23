var React=require('react');
var ReactDOM=require('react-dom');
var NavBar=require('./component/NavBar');
var GmailBox=require('./component/GmailBox');
{/*var objArr=[];*/}
{/*function parseJSONdata()
{
  var JSONdata='{"labels":'+
  '[{"id": "CATEGORY_PERSONAL","name": "CATEGORY_PERSONAL","messageListVisibility": "hide","labelListVisibility": "labelHide","type": "system"},'+
   '{"id": "CATEGORY_SOCIAL","name": "CATEGORY_SOCIAL","messageListVisibility": "hide","labelListVisibility": "labelHide","type": "system"},'+
   '{"id": "IMPORTANT","name": "IMPORTANT","messageListVisibility": "hide","labelListVisibility": "labelHide","type": "system"},'+
   '{"id": "CATEGORY_UPDATES","name": "CATEGORY_UPDATES","messageListVisibility": "hide","labelListVisibility": "labelHide","type": "system"},'+
   '{"id": "CATEGORY_FORUMS","name": "CATEGORY_FORUMS","messageListVisibility": "hide","labelListVisibility": "labelHide","type": "system"},'+
   '{"id": "CHAT","name": "CHAT","messageListVisibility": "hide","labelListVisibility": "labelHide","type": "system"},'+
   '{"id": "SENT","name": "SENT","messageListVisibility": "hide","labelListVisibility": "labelShow","type": "system"},'+
   '{"id": "INBOX","name": "INBOX","messageListVisibility": "hide","labelListVisibility": "labelShow","type": "system"},'+
   '{"id": "TRASH","name": "TRASH","messageListVisibility": "hide","labelListVisibility": "labelHide","type": "system"},'+
   '{"id": "CATEGORY_PROMOTIONS","name": "CATEGORY_PROMOTIONS","messageListVisibility": "hide","labelListVisibility": "labelHide","type": "system"},'+
   '{"id": "DRAFT","name": "DRAFT","messageListVisibility": "hide","labelListVisibility": "labelShow","type": "system"},'+
   '{"id": "SPAM","name": "SPAM","messageListVisibility": "hide","labelListVisibility": "labelHide","type": "system"},'+
   '{"id": "STARRED","name": "STARRED","messageListVisibility": "hide","labelListVisibility": "labelShow","type": "system"},'+
   '{"id": "UNREAD","name": "UNREAD","type": "system"}]}';

  var obj=JSON.parse(JSONdata);
  for(var i=0;i<obj.labels.length;i++)
  {
    var JSONobj={"id":obj.labels[i].id,"name":obj.labels[i].name};
    objArr.push(JSONobj);
  }
  console.log(JSON.stringify(objArr));
}*/}
var Parent=React.createClass({
  render: function()
  {
    return(
    <div className="container" id="content">
      <div className="row">
        <NavBar />
      </div>
      <div className="row">
        {/*<div className="col-lg-3">
          <LeftPanel labelArr={this.props.labelArr} />
        </div>
        <div className="col-lg-1">
        </div>
        <div className="col-lg-8">
        </div>
      </div>*/}
        <GmailBox />
      </div>
    </div>
   );
  }
});
ReactDOM.render(<Parent/>,document.getElementById('app'));
