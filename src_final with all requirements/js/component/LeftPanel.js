var React=require('react');

var LabelComponent=require('./LabelComponent');
var ModalWindow =require('./ModalWindow');
var LabelFun=require('./LabelFun');
msgeID
var LeftPanel=React.createClass({

  getInitialState: function(){
  return({modalWindow:false});
  },

  onClicking:function(){
    this.setState({modalWindow:true});
    },

  change:function(id){
  this.props.msgID(id);
  },

  render:function(){

    console.log("inside left panel");
    var data=this.props.allLabelsData.map(function(i){
    if(i.id=="INBOX"||i.id=="SENT"||i.id=="CHAT"||i.id=="IMPORTANT"||i.id=="DRAFT"||i.id=="SPAM"){
    return(
      <div className="btn btn-primary list-group-item" id="labellink">
      <LabelFun msgeID={this.change} g1={i.id}/>
      </div>
    );
  }
  },this
  );
  var modalWindow=this.state.modalWindow?<ModalWindow/>:null;
  return(
    <div>
      <a href="#myModal" role="button" className="btn btn-primary" data-toggle="modal"  id="modalWindow" onClick={this.onClicking}>Compose</a>
      {modalWindow}
      {data}
    </div>
  );
}
});
module.exports=LeftPanel;
