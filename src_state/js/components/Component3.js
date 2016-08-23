var React = require('react');

var Component = React.createClass({
  render :function () {
    console.log("Something!");
    return(
      <button type="button" className="btn btn-primary" onClick={this.props.handleChangeState}>Click me</button>
    );
  }
});
module.exports = Component
