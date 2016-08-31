
var React=require('react');

var ModalReply=React.createClass({



  getInitialState: function()
  {
    return({Message:"your message"});
  },

sending:function(e){

if(e.target.id=="Message")
{

  var msg=e.target.value;
  this.setState({Message:msg});
}
if(e.target.id=="To")
{

  var to=e.target.value;
  this.setState({To:to});
}
if(e.target.id=="Subject")
{

  var subject=e.target.value;
  this.setState({sub:subject});
}
console.log(Message);
console.log(sub);
console.log(To);
},

submit:function(){

  var accessToken = localStorage.getItem('gToken');
  var email = '';
  var Headers = {'To': this.state.To,'Subject': this.state.sub};
  for(var header in Headers){
    email += header += ": "+Headers[header]+"\r\n";
    console.log("email---"+email);
    console.log("header---"+header);
   }

  email += "\r\n" + this.state.Message;
  console.log("subject is " +email);
  var encodedMessage =  window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_');
  $.ajax({
         url: 'https://www.googleapis.com/gmail/v1/users/rajr76572%40gmail.com/messages/send?key={AIzaSyCtNDr9ikNZx04UVpcBuUXRoNTAAoAqbAo}',
         dataType: 'json',
         contentType: "application/json",
         type: 'POST',
         data: JSON.stringify({'raw': encodedMessage}),
         beforeSend: function (request)
         {
           request.setRequestHeader("Authorization", "Bearer "+accessToken);
         },
   success: function(data)
   {
     console.log("Success");
     alert('SENT');
   }.bind(this),
   async: false,
   error: function(xhr, status, err) {
     console.error("Error.."+err.toString());
   }.bind(this)
  });

},



render:function(){

return(
<div>

<div className="modal fade" id="ModalReply">
<div className="modal-dialog">
<div className="modal-content">
  <div className="modal-header">
    <button className="close" data-dismiss="modal">X</button>
    <h3 className="modal-title" id="replyHeader">Reply</h3>
  </div>

  <div className="modal-body">

    <form  className="form-horizontal">
      <div className="form-group">
        <div className="col-lg-12">
          <input className="form-control"   id="To" type="email" value={this.props.j} onChange={this.sending}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-lg-12">
          <input className="form-control" id="Subject"  type="text" value={this.props.k} onChange={this.sending}/>
        </div>
      </div>
      <div className="form-group">
        <div className="col-lg-12" >
          <textarea className="form-control" id="Message" rows="10" cols="10" onChange={this.sending}></textarea>
        </div>
      </div>
    </form>

  </div>


  <div className="modal-footer">
  <div class="form-group">
  <div class="col-lg-offset-2 col-lg-10">
      <span class="btn green fileinput-button">
        <input type="file" name="files[]" multiple=""/>
      </span>
  </div>
</div>
    <button className="btn btn-success" type="button" onClick={this.submit}>Send</button>
  </div>
</div>

</div>
</div>
  </div>
);

}
});
module.exports=ModalReply
