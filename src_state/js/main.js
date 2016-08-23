var React = require('react');
var ReactDom = require('react-dom');
var Child1 = require('./components/Component1.js');
var Child2 = require('./components/Component2.js');
var Child3 = require('./components/Component3.js');
var Child4 = require('./components/Component4.js');

var MainComponent = React.createClass({
  getInitialState: function(){
    return({sdata:"state hello data"})
  },
  handleclick: function (){
    return(
     this.setState({sdata:"Hi raji"}))
  //this.setState({title:"IT",description:"ID"}))
  },
  changeState: function () {
    this.setState({sdata :"my new name"});
  },
  render :function () {
   console.log(this.state.sdata);
    return(

      <div className = "container">
        <div className = "col-lg-12" >
            <h1><b>ReactJS</b></h1>
            {/*<Child1 pizza = "Dominos pizza" data={this.state.sdata}>*/}
            <Child1 pizza = "Dominos pizza" data={this.state.sdata} />
        </div>
        <div className = "col-lg-4" >
          <h1>Hi... From React</h1>
          <Child2 dataq={this.props.sdata}/>
          {/* <button onClick={this.handleclick}>button</button>*/}
         <Component3 handleChangeState={this.handleChangeState}/>
         <Component2 dataq={this.state.sdata}/>
        </div>
        <div className = "col-lg-8" >
          <h1>Hi... From React</h1>
            <Child3 dataw={this.props.sdata} prop1={this.handleclick}>

            </Child3>
        </div>
        <div className = "col-lg-12" >
          <h1>Byee... From React</h1>
          <Child4/>
        </div>
      </div>
    );
  }
})
ReactDom.render(<MainComponent/>,
  document.getElementById('app'));
