var React=require('react');

var ModalWindow=React.createClass({

  getInitialState: function()
  {
    return({To:" ",Subject:" ",Message:" "});
  },

  send:function()
  {
    var accessToken = localStorage.getItem('gToken');
    var email = '';
    var Headers = {'To': this.state.To,'Subject': this.state.Subject};
    for(var header in Headers)
    {
      email += header += ": "+Headers[header]+"\r\n";
     }
    email += "\r\n" + this.state.Message;
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
     }.bind(this),
     async: false,
     error: function(xhr, status, err) {
       console.error("Error.."+err.toString());
     }.bind(this)
    });

  },

onClose:function(){
  return({To:" ",Subject:" ",Message:" "});
},


  sending:function(e){

  if(e.target.id=="To")
  {
  var to=e.target.value;
  this.setState({To:to});
  }
  if(e.target.id=="Subject")
  {

  var subject=e.target.value;
  this.setState({Subject:subject});
  }
  if(e.target.id=="Message")
  {

    var message=e.target.value;
    this.setState({Message:message});
  }
  },
render:function(){
    return(
      <div className="container">

      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">

      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">X</button>
          <h4 className="modal-title">New Mail</h4>
        </div>

        <div className="modal-body">


        <form  className="form-horizontal">

              <div className="form-group">
                <div className="col-lg-12">
                TO:<input className="form-control" id="To"  placeholder="To" type="email" onChange={this.sending}/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-lg-12">
                  SUBJECT:<input className="form-control" id="Subject"  placeholder="Subject" type="text" onChange={this.sending}/>
                </div>
              </div>
              <div className="form-group">
                <div className="col-lg-12" >
                  MESSAGE:<textarea className="form-control" id="Message"  placeholder="Message" rows="10" cols="10" onChange={this.sending}></textarea>
                </div>
              </div>
        </form>




        </div>
        <div className="modal-footer">
        <span class="btn orange fileinput-button">
          <input type="file" name="files[]" multiple=""/>
        </span>
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-success" data-dismiss="modal"onClick={this.send}>Send</button>
        </div>
      </div>

    </div>
  </div>
  </div>
    );
  }
});
module.exports=ModalWindow;
