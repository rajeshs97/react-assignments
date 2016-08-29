var React=require('react');

var LabelComponent=require('./LabelComponent');
var ModalWindow =require('./ModalWindow');
var LabelFun=require('./LabelFun');

var LeftPanel=React.createClass({

  getInitialState: function(){
  return({modalWindow:false});
  },

  onClicking:function(){
    this.setState({modalWindow:true});
    },

  change:function(id){
  this.props.messageID(id);
  },

  render:function(){

    console.log("inside left panel");
    var data=this.props.allLabelsData.map(function(i){
      if(i.id=="INBOX" ||i.id=="SENT" ||i.id=="DRAFT" ||i.id=="IMPORTANT" ||i.id=="CHAT" || i.id=="TRASH" ){
    return(
      <div className='list-group-item' id='labelID'>
      <LabelFun msgID={this.change} labC={i.id}/>
      </div>
    );
  }
  },this
  );
  var modalWindow=this.state.modalWindow?<ModalWindow/>:null;
  return(
    <div>
      <a href="#myModal" role="button" className="btn btn-primary" data-toggle="modal"  id="modalWindow" onClick={this.onClicking}>+New</a>
      {modalWindow}
      {data}
    </div>
  );
}
});
module.exports=LeftPanel;
