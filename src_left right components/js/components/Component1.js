var React = require('react');
var Grandchild = require('./Grandchild.js');
var Component1 = React.createClass({
  render :function () {
    return(
      <div>
<h1>Hello From Component1</h1>
<p>{this.props.pizza}</p>
<Grandchild burger = {this.props.pizza}></Grandchild>
{/*<Grandchild burger = "Chicken Burger"></Grandchild>*/}
</div>
    );
  }
});
module.exports = Component1
