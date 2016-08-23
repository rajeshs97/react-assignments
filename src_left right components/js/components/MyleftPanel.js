var React= require('react');
var ReactDOM= require('react-dom');
{/*var NavBar = require('./NavBar');*/}

var MyleftPanel= React.createClass({
myEvent(event){
    console.log(event.target.id);
    if(event.target.id=="home")
    {
        this.props.handleChangeState("Home","This is my Home Page. It displays about Home.");
    }
    if(event.target.id=="about")
    {
        this.props.handleChangeState("About Us","This is my About Us Page. It displays about the creater.");
    }
    if(event.target.id=="contact")
    {
        this.props.handleChangeState("Contact Us","This is my Contact Us Page. It displays about the contact page.");
    }
},
    render: function(){
        return(
            <div className="panel panel-default">
                <div className="panel-body" >
                    <p><a href="#" className="btn btn-success btn-lg" type="button" onClick={this.myEvent} id="home">Home</a></p><br/>
                    <p><a href="#" className="btn btn-info btn-lg" type="button" onClick={this.myEvent} id="about">About Us</a></p><br/>
                    <p><a href="#" className="btn btn-danger btn-lg" type="button" onClick={this.myEvent} id="contact">Contact Us</a></p><br/>
                </div>
            </div>
        );
    }
});
module.exports=MyleftPanel
