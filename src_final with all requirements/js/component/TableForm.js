var React=require('react');
var ModalView=require('./ModalView');

var TableForm=React.createClass({

  getInitialState: function()
    {
      return({status:false});
    },
    change:function(){

    this.setState({status:true});
    },
    changeMessage:function () {

      this.setState({status:false});
    },

render:function(){
    return(
      <div className="list-group-item">
        <div className="container-fluid">

	         <div className="row">

		            <div className="col-lg-4">
                  {this.props.mailFrom}
		            </div>

		            <div className="col-lg-4">
                <a href="#ModalView" data-toggle="modal"  id="modal" onClick={this.change}> {this.props.mailSubject}</a>
                  {this.state.status?<ModalView changeMessage={this.changeMessage}  mFrom={this.props.mailFrom} mSubject={this.props.mailSubject} mDate={this.props.mailDate} mEncodedBody={this.props.encodedBodyToChild}/>:null}
		            </div>

		            <div className="col-lg-4">
                  {this.props.mailDate}
		            </div>

	          </div>
        </div>
      </div>

    );

  }
});
module.exports=TableForm;
