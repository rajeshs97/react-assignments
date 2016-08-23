var React = require('react');

var Grandchild = React.createClass({
  render :function () {
    return(
      <div>
<h1>Grandchild From Component1</h1>
<p>{this.props.burger}</p>
</div>
    );
  }
});
module.exports = Grandchild
