var React= require('react');
var ReactDOM= require('react-dom');
var NavBar=require('./components/NavBar');
var ChildComponent= require('./components/ChildComponent');
var MyleftPanel=require('./components/MyleftPanel');
var MyrightPanel=require('./components/MyrightPanel');
var MyComponentButton=require('./components/MyComponentButton');

var MainComponent= React.createClass({

getInitialState: function(){
    return(
        {title:'This is Default...', description:'This is my default page...'}
    );
},
changeState(t,d)
{
    this.setState({title:t,description:d});
},

render: function(){
    console.log("This is parent ");
        return(
            <div className="container ">
                <div className="col-lg-12">
                    <NavBar />
                </div>
                <div className="col-lg-12" id="rightPanel">
                    <div className="col-lg-3">
                        <MyleftPanel handleChangeState={this.changeState} />
                    </div>
                    <div className="col-lg-9">
                        <MyrightPanel title={this.state.title} description={this.state.description} />
                    </div>
                </div>
            </div>
        );
    }
});
ReactDOM.render(<MainComponent/>,document.getElementById('app'));
