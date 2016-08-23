var React = require('react');
var ReactDom = require('react-dom');
var Child1 = require('./components/Component1.js');
var Child2 = require('./components/Component2.js');
var Child3 = require('./components/Component3.js');
var Child4 = require('./components/Component4.js');

var MainComponent = React.createClass({
  render :function () {
    return(

      <div className = "container">
        <div className = "col-lg-12" >
            <h1>Hello From React</h1>
            <Child1 pizza = "Dominos pizza">

            </Child1>
          </div>
        <div className = "col-lg-4" >
          <h1>Hi... From React</h1>
          <Child2/>
        </div>
        <div className = "col-lg-8" >
          <h1>Hi... From React</h1>
          <Child3/>
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
