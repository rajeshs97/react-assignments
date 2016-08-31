 React=require('react');
var ModalReply=require('./ModalReply.js')

var ModalView=React.createClass({

  getInitialState: function()
  {
    return({status:false});
  },

  change:function(){
  this.setState({status:true});
  },

  appendToIframe: function(message){
   var iFrameNode = this.refs.myIframe,
   frameDoc = iFrameNode.contentWindow.document;
   frameDoc.write(message);
  },


render:function(){

  return(
    <div>
    <div className="modal fade" id="ModalView">
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <button className="close" data-dismiss="modal" onClick={this.props.changeMessage}>x</button>
              <h3 className="modal-title">ModalView</h3>
          </div>

          <div className="modal-body">

            <form  className="form-horizontal">
            <div className="form-group">
              <div className="col-lg-12">
                <input className="form-control" id="To" type="email" value={this.props.mFrom} disabled></input>
              </div>
            </div>
          <div className="form-group">
            <div className="col-lg-12">
              <input className="form-control" id="Subject" type="text" value={this.props.mSubject}></input>
            </div>
          </div>
          <iframe id="iframe-message" ref="myIframe" >
              </iframe>
        </form>
      </div>

      <div className="modal-footer">
          <a href="#ModalReply" role="button" className="btn btn-primary" data-toggle="modal" onClick={this.change}>reply</a>
          {this.state.status?<ModalReply changeMessage={this.props.changeMessage} j={this.props.mFrom} k={this.props.mSubject}/>:null}
      </div>
      </div>
    </div>
  </div>
</div>
);
},

componentDidMount: function(){
var encodedBody = this.props.mEncodedBody;

encodedMessage = encodedBody.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '');
encodedBody = decodeURIComponent(escape(window.atob(encodedMessage)));
this.appendToIframe(encodedBody);
}

});

module.exports=ModalView
